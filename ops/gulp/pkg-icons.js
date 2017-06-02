const gulp = require('gulp');

const task = (cb) => {
    return gulp.src(['./src/styles/icons/**.css','./src/styles/icons/**.svg' ])
		.pipe(gulp.dest('./dist/css/'));
}

gulp.task('pkg-icons', task);
module.exports = task;