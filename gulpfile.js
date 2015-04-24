var gulp = require('gulp');

var less = require('gulp-less');
var env = require('gulp-env');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var gulpkss = require('gulp-kss');
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
                    fontHeight: 100 // IMPORTANT
                }
            )
        )
        .on('codepoints',
            function(codepoints, options)
            {
                gulp.src('src/less/templates/_icons.less')
                .pipe(
                    consolidate('lodash',
                        {
                            glyphs: codepoints,
                            fontName: 'hyicon',
                            fontPath: "fonts/",
                            className: 'hyicon'
                        }
                    )
                )
                .pipe(gulp.dest('src/less/components'));
            }
        )
        .pipe( gulp.dest('dist/fonts/') );
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
        .pipe(
            gulp.dest( paths.environment+'/css/' )
        );
    }
);



//----ABOVE COMPLETE----


// Complile general Less Files
gulp.task('html', 
    function ()
    {
        gulp.src(paths.html)
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
    .pipe( gulp.dest('docs/kss') );

    gulp.src('./dist/**/*')
    .pipe( gulp.dest('./docs/kss/public/y-techne/dist/') );

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
            './src/js/**/*.js'
        ]
    )
    .pipe( concat('techne.min.js') )
    .pipe( uglify() )
    .pipe(
        gulp.dest(
                paths.environment+'/js/'
        )
    );
    

    /*
    HTML
     */


    gulp.src(paths.html)
    .pipe( concat('techne.html') )
    .pipe( 
        insert.prepend(
            function()
            {
                var componentHTML = [];
                componentHTML.push( "<link rel='import' href='../../../apply-author-styles/apply-author-styles.html'>\n" );

                return componentHTML.join('\n');
            }
        )
    )
    .pipe(
        gulp.dest(paths.environment+'/html/')
    );

    /*
    Create the distribution zip file
     */
    gulp.src(
        [
            'dist/**/*'
        ]
    )
    .pipe( zip('techne'+require('./bower.json').version+ '.zip') )
    .pipe( gulp.dest('docs/kss/public/release-archive/') );
    
    gulp.src('dist/**/*')
    .pipe( gulp.dest('docs/kss/public/dist') );

    gulp.src(['bower_components/bootstrap/**/*'])
    .pipe( gulp.dest('docs/kss/bower_components/bootstrap') );


});


// Rerun the task when a file changes
gulp.task('watch', 
    function() 
    {
        gulp.watch(paths.less_watch, ['less']);
        //gulp.watch(paths.css, ['css']);
        gulp.watch(paths.html, ['html']);
        gulp.watch(paths.less_watch, ['styleguide']);
    }
);

// iconfont, less, kss_bootrap_src

gulp.task('dist', [ 'less', 'styleguide', 'deploy']);


// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'dist' , 'connect', 'watch']);
