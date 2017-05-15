const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

const debug = require('gulp-debug');

let environment = require('../lib/environment');

const paths = {
	src: './src/styles/components',
	dest: './dist/css/components'
}

const task = (cb) => {

    //compile individual component files
    let prefix = 'techne';

    return gulp.src(`${paths.src}/*`)
        //.pipe(debug())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
    		browsers: ['last 2 versions'],
    		cascade: true
    	}))
        .pipe(cleanCSS())
        .pipe(rename({
            prefix: `${prefix}-`
        }))
        .pipe(gulp.dest(paths.dest))

}

gulp.task('pkg-css-components', task);
module.exports = task;
