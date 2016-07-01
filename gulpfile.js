var gulp = require('gulp');

var less = require('gulp-less');
var env = require('gulp-env');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var gulpkss = require('gulp-kss');
var cachebust = require('gulp-cache-bust');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var config = require('./config.json');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var zip = require('gulp-zip');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: false, aggressiveMerging:true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

var connect = require('gulp-connect-multi')();


var paths = {
    icons_path: 'src/icons/*.svg',
    bootstrap_icons: 'bower_components/bootstrap/fonts/**/*',
    scripts: 'src/js/**/*',
    less: [
        'src/less/**/*.less',
        '!src/less/**/_*.less'
    ],
    less_watch: [
        'src/less/**/*.less',
        '!src/less/globals/_resource-paths.less'
    ],
    doc_less: 'src/less/**/*.less',
    doc_markdown: 'docs/markdown/**/*',
    doc_template: 'docs/template/**/*',
    html: [
        'src/html/**/*.html'
    ],
    environment: 'dist'
};

// Create Iconfont
gulp.task('iconfont',
    function()
    {
        gulp.src(paths.icons_path)
        .pipe(
            iconfont(
                {
                    fontName: 'hyicon',
                    normalize: true,
                    centerHorizontally: true,
                    fontHeight: 100, // IMPORTANT
                    appendCodepoints: true
                }
            )
        )
        .on('codepoints',
            function(codepoints, options)
            {
                // automatically assign a unicode value to the icon
                codepoints.forEach(function(glyph, idx, arr) {
                arr[idx].codepoint = glyph.codepoint.toString(16)
                });

                gulp.src('src/less/templates/_icons.less')
                .pipe(
                    consolidate('lodash',
                        {
                            glyphs: codepoints,
                            appendCodepoints: true,
                            fontName: 'hyicon',
                            fontPath: "/fonts/",
                            className: 'hyicon'
                        }
                    )
                )
                .pipe(gulp.dest('src/less/components'));
            }
        )
        .pipe( gulp.dest('dist/techne/fonts/') );
    }
);

gulp.task('setpath', function(cb) {
    gulp.src('src/less/templates/_resource-paths.less')
        .pipe(
            consolidate('lodash',
                {
                    bootstrap_path: config.bootstrap_path,
                    bower_path: config.bower_path
                }
            )
        )
        .pipe(
            gulp.dest('src/less/globals')
        );
    cb(); // Callback to less task
});

// Complile general Less Files
gulp.task('less', ['setpath'] ,
    function()
    {


        gulp.src(paths.less)
        //.pipe(sourcemaps.init())
        .pipe(
            less(
                {
                    errLogToConsole: true,
                    plugins: [autoprefix, cleancss]
                }
            )
        )
        .on('error',
            function(err)
            {
                console.log(err.message);
            }
        )
        //.pipe(connect.reload())
        //.pipe(sourcemaps.write())
        .pipe(
            concat('techne.min.css')
        )
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(
            gulp.dest( paths.environment+'/techne/css/' )
        );
    }
);



//----ABOVE COMPLETE----


// Complile general Less Files
gulp.task('html',
    function ()
    {
        gulp.src(paths.html)
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(
            gulp.dest('docs/')
        );
    }
);


// Generate Docs
gulp.task('styleguide', function () {


    gulp.src(paths.doc_less)
    .pipe(
        gulpkss(
            {
                markDownDirectory: __dirname + '/docs/markdown/',
                templateDirectory: __dirname + '/docs/template'
            }
        )
    )
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe( gulp.dest('docs/kss') );

    gulp.src('./bower_components/bootstrap/fonts/**/*')
    .pipe( gulp.dest('./docs/kss/public/bootstrap/fonts') );
});


gulp.task('connect',
    connect.server(
        {
            root: [__dirname + '/docs/kss'],
            port: 8080,
            livereload: true,
            open: {
                browser: 'none' // if not working OS X browser: 'Google Chrome'
            }
        }
    )
);

gulp.task('deploy', function(){

    /*
    JS
     */
    gulp.src(
        [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/select2/select2.js',
            './src/js/**/*.js'
        ]
    ).pipe(gulp.dest(paths.environment+'/js/'));

    gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('docs/kss/public/js/'));


    gulp.src(
        [
            './src/js/**/*.js'
        ]
    )
    .pipe(concat('techne.min.js'))
    .pipe(uglify())

    .pipe(insert.append(function(){
        var headTagAppendScript = ['\n'];


        if(config.appendComponentCss || config.appendComponentHTML)
        {
            headTagAppendScript.push(";(function() {");
                headTagAppendScript.push("var headTag = document.getElementsByTagName('head')[0];");
                if(config.appendComponentCss)
                {
                    headTagAppendScript.push("var css = document.createElement('link');");
                    headTagAppendScript.push("css.rel = 'stylesheet';");
                    headTagAppendScript.push("css.href = '"+ config.bower_path +"/hyTechne/dist/css/techne.min.css';");
                    headTagAppendScript.push("headTag.appendChild(css);");
                }

                if(config.appendComponentHTML) {
                    headTagAppendScript.push("var html = document.createElement('link');");
                    headTagAppendScript.push("html.rel = 'import';");
                    headTagAppendScript.push("html.href = '" + config.bower_path + "/hyTechne/dist/html/techne.html';");
                    headTagAppendScript.push("headTag.appendChild(html);");
                }

            headTagAppendScript.push("})();");
        }
        return headTagAppendScript.join('\n');
    }))
    .pipe(gulp.dest(paths.environment+'/js/'))
    .pipe(gulp.dest('docs/kss/public/js/'));

    /*
    Create the distribution zip file
     */
    gulp.src('dist/**/*')
    .pipe( zip('techne'+require('./bower.json').version+ '.zip') )
    .pipe( gulp.dest('docs/kss/public/release-archive/') );


    gulp.src('dist/bootstrap/**/*')
    .pipe( gulp.dest('docs/kss/public/dist/bootstrap/') );

    gulp.src('dist/js/**/*')
    .pipe( gulp.dest('docs/kss/public/dist/js/') );

    gulp.src('dist/techne/**/*')
    .pipe( gulp.dest('docs/kss/public/dist/techne/') );

    // gulp.src(['bower_components/bootstrap/**/*'])
    // .pipe( gulp.dest('docs/kss/bower_components/bootstrap') );


});

gulp.task('patchgulpkss',
    function(){
        //patch the gulp-kss main branch
        gulp.src('./gulp-patch/gulp-kss/**/*.js').pipe(gulp.dest('./node_modules/gulp-kss'));
        //patch the gulp-kss depednecy of kss
        gulp.src('./gulp-patch/kss/**/*.js').pipe(gulp.dest('./node_modules/gulp-kss/node_modules/kss/lib'));
        gulp.src('./gulp-patch/kss/**/*.js').pipe(gulp.dest('./node_modules/kss/lib'));
    }
);

gulp.task('starterpages',
    function(){
        //copy techne into the demo path
        gulp.src('dist/css/**/*').pipe(gulp.dest('docs/kss/starter-pages/css'));
        gulp.src('dist/fonts/**/*').pipe(gulp.dest('docs/kss/starter-pages/fonts'));

        //copy  generated JS files to starter pages
        gulp.src('dist/js/**/*')
        .pipe( gulp.dest('docs/kss/starter-pages/js/') );

        gulp.src('dist/js/**/*')
        .pipe( gulp.dest('dist/demo/starter-pages/js/') );

        //copy techne folder to demo pages
        gulp.src('dist/techne/**/*')
        .pipe( gulp.dest('docs/kss/starter-pages/techne/') );

        //copy techne folder to demo pages
        gulp.src('dist/bootstrap/**/*')
        .pipe( gulp.dest('docs/kss/starter-pages/bootstrap/') );
    }
);


gulp.task('packagedist',
  function()
  {
    //copies files to the dist folder
    gulp.src('./bower_components/bootstrap/fonts/**/*').pipe( gulp.dest('dist/bootstrap/fonts') );

    //copy the dist files
    gulp.src(['docs/kss/starter-pages/bootstrap/**/*',
              'docs/kss/starter-pages/images/**/*',
              'docs/kss/starter-pages/js/**/*',
              'docs/kss/starter-pages/techne/**/*',
              'docs/kss/starter-pages/cards.html',
              'docs/kss/starter-pages/details-1.html',
              'docs/kss/starter-pages/details-2.html',
              'docs/kss/starter-pages/table.html'],
              {base: 'docs/kss/'}).pipe(gulp.dest('dist/demo'));
  }
);


gulp.task('build', ['less', 'patchgulpkss', 'styleguide', 'starterpages', 'packagedist', 'deploy']);

// iconfont, less, kss_bootrap_src
gulp.task('dist', ['iconfont', 'build']);


gulp.task('debugStyleguide', ['patchgulpkss', 'styleguide']);


// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'build' , 'connect', 'watch']);

// Rerun the task when a file changes
gulp.task('watch',
    function()
    {
        gulp.watch(paths.less_watch, ['less']);
        gulp.watch(paths.html, ['html']);
        gulp.watch(paths.less_watch, ['styleguide']);
    }
);
