const gulp            = require('gulp')
const gulpSequence    = require('gulp-sequence')

const defaultTask = (cb) => {
  gulpSequence('clean', 'resources', 'css', 'html', 'docs', 'serve', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
