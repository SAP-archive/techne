const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

const debug = require('gulp-debug');

let environment = require('../lib/environment');

const paths = {
	src: './src/styles/components',
	dest: './dist/components'
}

const task = (cb) => {

    //compile individual component files
    let prefix = 'techne';
    var componentsList = [`${paths.src}/card.scss`]

    return gulp.src(componentsList)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(environment.production, autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    })))
    .pipe(gulpif(environment.production, cleanCSS({
        format: 'beautify'
    })))
    // .pipe(rename({
    //     prefix: `${prefix}-`
    // }))
    .pipe(gulp.dest(paths.dest))

}

gulp.task('pkg-css-components', task);
module.exports = task;
