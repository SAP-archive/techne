const gulp = require('gulp');

const task = (cb) => {
    return gulp.src('./dist/css/**.svg')
		.pipe(gulp.dest('./www/css/'));
}

gulp.task('docs-icons', task);
module.exports = task;