const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const handleErrors = require('./lib/handleErrors');
const debug = require('gulp-debug');
const browserSync = require('browser-sync');

//DATA


// HELPERS


// TASKS
const watchTask = () => {


	gulp.watch(`${config.root.docs}/**/*.html`, ['docs']);
	gulp.watch(`${config.root.www}/**/*.html`).on('change', browserSync.reload);
	
	gulp.watch(`${config.root.src}/${config.tasks.css.src}/**/*.scss`, ['css']);
	gulp.watch(`${config.root.dest}/${config.tasks.css.dest}/**/*.css`).on('change', browserSync.stream);


}

gulp.task('watch', watchTask);
module.exports = watchTask;
