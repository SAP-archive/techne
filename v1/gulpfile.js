var gulp = require('gulp');

var less = require('gulp-less');
var gulpkss = require('gulp-kss');
var cachebust = require('gulp-cache-bust');
var concat = require('gulp-concat');
var config = require('./config.json');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var zip = require('gulp-zip');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: false, aggressiveMerging:true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["Safari >= 8", "last 2 versions", "ie >= 9"] });

const browserSync = require('browser-sync').create();

const yargs = require('yargs');
const PRODUCTION = !!(yargs.argv.production);
const DEVELOPMENT = !!(yargs.argv.development);

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

/**
 * Font settings
 */
const fontName = 'tn-icon' // set name of your symbol font
const className = 'tn-icon' // set class name in your CSS

// Create Iconfont
gulp.task('iconfont', function() {
    gulp.src(paths.icons_path)
        .pipe(iconfont({
            fontName,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true,
            centerHorizontally: true,
            fontHeight: 100, // IMPORTANT
            prependUnicode: true
        }))
        .on('glyphs', (glyphs) => {
          const options = {
            className,
            fontName,
            fontPath: '/fonts/',
            glyphs: glyphs.map(mapGlyphs)
          }
          gulp.src(`src/less/templates/_icons.less`)
            .pipe(consolidate('lodash', options))
            .pipe(gulp.dest('src/less/components')) // set path to export your CSS
        })
        .pipe( gulp.dest('dist/techne/fonts/') );
    }
);
function mapGlyphs (glyph) {
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
}


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
gulp.task('less', ['setpath'], () => {
    return gulp.src(paths.less)
        .pipe(less({
            errLogToConsole: true,
            plugins: [autoprefix, cleancss]
        }))
        .on('error', (err) => {
            console.log(err.message);
        })
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(concat('techne.min.css'))
        .pipe(gulp.dest( paths.environment+'/techne/css/' ))
});


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
    .pipe(gulp.dest('docs/kss') )
    //.pipe(browserSync.stream());
    

    gulp.src('./bower_components/bootstrap/fonts/**/*')
    .pipe( gulp.dest('./docs/kss/public/bootstrap/fonts') );
});


// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: __dirname + '/docs/kss'
        },
        port: 8080,
        open: DEVELOPMENT
    });
    gulp.watch(paths.less_watch, ['watch-styleguide']);
    gulp.watch('docs/kss/public/dist/techne/css/techne.min.css').on('change', browserSync.reload);
});

// these custom tasks are here to avoid calling deploy to do this one thing
gulp.task('watch-css', ['less'], () => {
    //copy compiled minified CSS to docs public/dist folder
    return gulp.src('dist/techne/css/techne.min.css')
        .pipe(gulp.dest('docs/kss/public/dist/techne/css/'));
});
gulp.task('watch-styleguide', ['styleguide', 'watch-css'], () => {

});



gulp.task('deploy', function(){

    /*
    JS
     */
    gulp.src(
        [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/select2/select2.js',
            './bower_components/Jcrop/js/jquery.Jcrop.min.js',
            './src/js/**/*.js'
        ]
    ).pipe(gulp.dest(paths.environment+'/js/'));

    gulp.src('./bower_components/jquery/dist/jquery.min.js')
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

    gulp.src([
            './bower_components/Jcrop/css/jquery.Jcrop.min.css',
            './bower_components/Jcrop/css/Jcrop.gif'
        ])
        .pipe(gulp.dest('docs/kss/public/dist/vendor/'));

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


gulp.task('packagedist',
  function()
  {
    //copies files to the dist folder
    gulp.src('./bower_components/bootstrap/fonts/**/*').pipe( gulp.dest('dist/bootstrap/fonts') );
  }
);


gulp.task('build', ['less', 'patchgulpkss', 'styleguide', 'packagedist', 'deploy']);

// iconfont, less, kss_bootrap_src
gulp.task('dist', ['iconfont', 'build']);


// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'build' , 'serve']);

