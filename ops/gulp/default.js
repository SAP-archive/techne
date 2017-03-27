const gulp            = require('gulp')
const gulpSequence    = require('gulp-sequence')

const defaultTask = (cb) => {
  gulpSequence('clean', 'css', 'docs', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
