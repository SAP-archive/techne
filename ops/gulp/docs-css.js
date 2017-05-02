const gulp = require('gulp')
const gulpSequence    = require('gulp-sequence')
const sass = require('gulp-sass')

const config = require('../config')
let environment = require('../lib/environment')

const debug = require('gulp-debug');

const task = (cb) => {
	techneCss()
	techneGuidelines()
}	

const techneCss = (cb) => {
 	return gulp.src(['./dist/css/techne-all.css','./dist/css/techne-debug.css'])
		.pipe(gulp.dest('./www/css'));
}

const techneGuidelines = (cb) => {
	return gulp.src('./docs/styleguide/styles/*.scss')
    	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    	.pipe(gulp.dest('./www/css'));	
}

gulp.task('docs-css', ['css'], task)
module.exports = task