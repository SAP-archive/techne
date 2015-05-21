var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpkss = require('../index.js');
var gulpconcat = require('gulp-concat');
var path = require('path');
var es = require('event-stream');

/*es.merge(
    gulp.src(['node_modules/kss/demo/*.less', 'node_modules/kss/demo/** /*.less'])
        .pipe(gulpkss({
            templateDirectory: path.join(__dirname + '/../node_modules/kss/lib/template'),
            overview: path.join(__dirname + '/../node_modules/kss/demo/styleguide.md')
        })),
    gulp.src('node_modules/kss/demo/*.less')
        .pipe(gulpless())
        .pipe(gulpconcat('public/style.css'))
).pipe(gulp.dest('build/'));*/

gulp.src(['node_modules/kss/demo/*.less', 'node_modules/kss/demo/**/*.less'])
    .pipe(gulpkss({
        templateDirectory: path.join(__dirname + '/../node_modules/kss/lib/template'),
        overview: path.join(__dirname + '/../node_modules/kss/demo/styleguide.md')
    }))
    .pipe(gulp.dest('build/'));

gulp.src('node_modules/kss/demo/*.less')
    .pipe(gulpless())
    .pipe(gulpconcat('public/style.css'))
    .pipe(gulp.dest('build/'));

