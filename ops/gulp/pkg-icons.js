const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: './src/styles/icons',
	dest: !environment.production ? 'tmp/css' : 'dist'
}

const task = (cb) => {
    let prefix = 'techne';
    return gulp.src([`${paths.src}/*.svg`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('pkg-icons', task);
module.exports = task;
