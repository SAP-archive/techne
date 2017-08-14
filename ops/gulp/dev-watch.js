const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: 'src',
	dest: !environment.production ? 'tmp' : 'dist'
}

const task = () => {

	//watch docs templates and component templates
	gulp.watch([`./docs/**/*.html`,`./src/**/*.html`]);

	//watch component styles
	gulp.watch([`./src/**/*.scss`], ['pkg-css']);

	//update docs styles
	gulp.watch([`${paths.dest}/css/**/techne.css`, `${paths.dest}/css/**/techne-debug.css`], ['docs-css']);

	//update styleguide styles
	gulp.watch([`./docs/styleguide/styles/**/*.scss`], ['docs-styleguide']);

}

gulp.task('dev-watch', task);
module.exports = task;
