const gulp = require('gulp');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();

const task = () => {
    browserSync.init({
        server: {
            baseDir: [ './www' ],
            open: true,
		    index: 'index.html',
			reloadOnRestart: true,
			reloadDelay: 100
        }
    });
	browserSync.watch(`./www/**/*.html`).on('change', browserSync.reload);
	browserSync.watch(`./www/css/**/*.css`).on('change', browserSync.reload);
}

gulp.task('dev-serve', task);
module.exports = task;
