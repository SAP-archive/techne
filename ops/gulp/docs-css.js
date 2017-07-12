const gulp = require('gulp');
const sass = require('gulp-sass');

let environment = require('../lib/environment');

const paths = {
	src: !environment.production ? './tmp/css' : './dist',
	dest: './www/css'
}

let techneCss = environment.production ? 'techne.min.css' : 'techne.css';
let debugSrc = environment.debug ? [`${paths.src}/techne-debug.css`] : [];

const task = (cb) => {
    return gulp.src([`${paths.src}/${techneCss}`,...debugSrc])
		.pipe(gulp.dest(paths.dest));

}

gulp.task('docs-css', task);
module.exports = task;