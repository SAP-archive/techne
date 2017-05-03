const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');


const watchTask = () => {

	//watch docs templates and component templates
	gulp.watch([`${config.root.docs}/**/*.html`,`${config.root.src}/**/*.html`], ['docs-html']);

	//watch component styles
	gulp.watch(`${config.root.src}/**/*.scss`, ['css']);
	
	//update docs styles
	gulp.watch([`${config.root.dest}/css/**/techne-all.css`, `${config.root.dest}/css/**/techne-debug.css`], ['docs-css']);

	//update styleguide styles
	gulp.watch([`./docs/styleguide/styles/*.scss`], ['docs-styleguide']);

}

gulp.task('watch', watchTask);
module.exports = watchTask;
