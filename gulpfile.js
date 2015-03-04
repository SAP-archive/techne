var gulp = require('gulp');

var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var gulpkss = require('gulp-kss');
var concat = require('gulp-concat');

var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });


var connect = require('gulp-connect-multi')();


var paths = {
  scripts: 'src/js/**/*',
  less: ['src/less/**/*.less','!src/less/**/_*.less'],
  less_watch: 'src/less/**/*.less',
  doc_less: 'src/less/**/*.less',
  doc_markdown: 'docs/markdown/**/*',
  doc_template: 'docs/template/**/*',
  html: ['src/html/**/*.html', 'docs/demo/**/*'],
  environment: 'dist'
};



// Complile general Less Files
gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(less({errLogToConsole: true, plugins: [cleancss]}))
        .on('error', function(err){ console.log(err.message); })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
        .pipe(concat('techne.min.css'))
        .pipe(connect.reload())
        .pipe(gulp.dest(paths.environment+'/css/'));
});


// Create Iconfont
gulp.task('iconfont', function(){
  gulp.src(['src/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'hyicon',
      normalize: true,
      centerHorizontally: true,
      fontHeight: 100 // IMPORTANT
    }))
    .on('codepoints', function(codepoints, options) {
      gulp.src('src/less/templates/_icons.less')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'hyicon',
          fontPath: '../fonts/',
          className: 'hyicon'
        }))
        .pipe(gulp.dest('src/less/components'));
    })
    .pipe(gulp.dest('dist/fonts/'));
});

// Complile general Less Files
gulp.task('html', function () {
    return gulp.src(paths.html)
      .pipe(gulp.dest('docs/'))
      .pipe(connect.reload());
});


// Generate Docs
gulp.task('styleguide', function () {


    gulp.src(paths.doc_less)
    .pipe(gulpkss({
//        overview: __dirname + '/docs/markdown/index.md',
        markDownDirectory: __dirname + '/docs/markdown/',
        templateDirectory: __dirname + '/docs/template'
    }))
    .pipe(gulp.dest('docs/kss'));

    gulp.src(paths.less)
    .pipe(less())
    .pipe(concat('techne.css'))
    .pipe(gulp.dest('docs/kss/public/css/'));

    gulp.src('./dist/fonts/**/*')
   .pipe(gulp.dest('./docs/kss/public/fonts'));

    gulp.src('./bower_components/bootstrap/fonts/**/*')
   .pipe(gulp.dest('./docs/kss/public/fonts'));


});


gulp.task('connect', connect.server({
  root: [__dirname],
  port: 1341,
  livereload: true,
  open: {
    browser: 'none' // if not working OS X browser: 'Google Chrome'
  }
}));

gulp.task('deploy', function(){
    
    
    /*
    JS
     */
    gulp.src(
        [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js', 
            './bower_components/webcomponentsjs/webcomponents.js',
            './src/append-sources.js'
        ]
    )
    .pipe(concat('techne.js'))
    .pipe(gulp.dest(paths.environment+'/js/'));
    
    /*
    HTML
     */
    
    gulp.src(
        [
            './bower_components/polymer/polymer.html',
            './src/components/techne_components.html'
        ]
    )
    .pipe(concat('techne.html'))
    .pipe(gulp.dest(paths.environment+'/html/'))
    
    /*
    CSS
     */
    gulp.src(
        [
            './docs/kss/public/style.css',
            './dist/css/techne.min.css'
        ]
    )
    .pipe(concat('techne.css'))
    .pipe(gulp.dest(paths.environment+'/css/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.less_watch, ['less']);
  //gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.doc_template, ['styleguide']);
    gulp.watch(paths.less_watch, ['styleguide']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'less' , 'connect', 'watch', 'styleguide']);
