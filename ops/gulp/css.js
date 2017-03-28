const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const handleErrors = require('./lib/handleErrors');
const debug = require('gulp-debug');
//const browserSync = require('browser-sync');

const paths = {
	src: `${config.root.src}/${config.tasks.css.src}/**/*.${config.tasks.css.extensions}`,
	ignore: [
		`!${config.root.src}/${config.tasks.css.src}/**/_*.${config.tasks.css.extensions}`,
		`!${config.root.src}/${config.tasks.css.src}/theme/**/*`
	],
	dest: `${config.root.dest}/${config.tasks.css.dest}`
}

const cssTask = () => {

	cssSass();
	

}


const cssSass = () => {
  return gulp.src([paths.src].concat(paths.ignore))
  	.pipe(debug())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest))
    //.pipe(browserSync.stream());
}


gulp.task('css', cssTask);
module.exports = cssTask;
