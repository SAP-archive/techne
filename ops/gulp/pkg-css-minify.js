const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const gulpIgnore = require('gulp-ignore');

const debug = require('gulp-debug');

let environment = require('../lib/environment');

const paths = {
	src: './dist/css',
	dest: './dist/css'
}

const task = (cb) => {

    return gulp.src([`${paths.src}/**/*.css`])
        .pipe(debug())
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: false
                }
            }
        }))
        .pipe(rename({
            suffix: `.min`
        }))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('pkg-css-minify', task);
module.exports = task;
