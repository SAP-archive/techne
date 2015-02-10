var gulp = require('gulp');

var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var gulpkss = require('gulp-kss');



var paths = {
  scripts: 'src/js/**/*',
  less: ['src/less/**/*.less','!src/less/**/_*.less'],
  doc_markdown: 'docs/markdown/**/*',
  doc_templates: '/docs/templates/*.hbs',
  environment: 'dist'
};



// Complile general Less Files
gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(less({errLogToConsole: true, outputStyle: "minified"}))
        .on('error', function(err){ console.log(err.message); })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
        .pipe(concat('techne.min.css'))
        .pipe(connect.reload())
        .pipe(gulp.dest(paths.environment+'/css/'));
});

// Complile general Less Files
gulp.task('styleguide', function () {
    gulp.src(paths.less)
    .pipe(gulpkss({
        overview: __dirname + '/docs/markdown/index.md'
    }))
    .pipe(gulp.dest('styleguide/'));
 
// Concat and compile all your styles for correct rendering of the styleguide. 
    gulp.src('paths.less')
    .pipe(less())
    .pipe(concat('public/style.css'))
    .pipe(gulp.dest('styleguide/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.css, ['css']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'less']);
