const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const task = (cb) => {
    gulpSequence('generateIcons','copyIconsSvg', 'copyIconsCss', cb);
}

gulp.task('pkg-icons', task);
module.exports = task;