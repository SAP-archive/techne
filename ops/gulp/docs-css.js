const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const cssnano = require('gulp-cssnano');
const gulpconcat = require('gulp-concat');
const rename = require("gulp-rename");

const config = require('../config')
let environment = require('../lib/environment')

const debug = require('gulp-debug');

const task = (cb) => {
 	return gulp.src(['./dist/css/techne-all.css','./dist/css/techne-debug.css'])
        .pipe(gulpconcat('techne-styleguide.css'))
        .pipe(cssnano())
        .pipe(cleanCSS({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./www/css'))
}

gulp.task('docs-css', ['css'], task)
module.exports = task