const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: !environment.production ? './tmp/css' : './dist/css',
	dest: './www/css'
}

const task = (cb) => {
    return gulp.src([`${paths.src}/*.svg`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('docs-icons', task);
module.exports = task;
