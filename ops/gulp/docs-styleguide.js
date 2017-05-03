const gulp = require('gulp')
const sass = require('gulp-sass')

const config = require('../config')
let environment = require('../lib/environment')

const debug = require('gulp-debug');

const task = (cb) => {
	return gulp.src('./docs/styleguide/styles/*.scss')
    	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    	.pipe(gulp.dest('./www/css'));	
}

gulp.task('docs-styleguide', task)
module.exports = task