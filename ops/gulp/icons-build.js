const gulp = require('gulp');
const gulpSequence = require('gulp-sequence')

const task = (cb) => {
    gulpSequence('icons-generate','icons-svg', 'icons-css', 'docs-icons', cb);
}

gulp.task('icons-build', task);
module.exports = task;