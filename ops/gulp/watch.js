const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const handleErrors = require('./lib/handleErrors');


const watchTask = () => {

	//watch docs templates and component templates
	gulp.watch([`${config.root.docs}/**/*.html`,`${config.root.src}/**/*.html`], ['docs-html']);

	//watch component styles
	gulp.watch(`${config.root.src}/**/*.scss`, ['css']);

}

gulp.task('watch', watchTask);
module.exports = watchTask;
