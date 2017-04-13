const gulp            = require('gulp')
const gulpSequence    = require('gulp-sequence')

const defaultTask = (cb) => {
  gulpSequence('docs-build', ['serve', 'watch'], cb)
  console.log('hi')
}

gulp.task('default', defaultTask)
module.exports = defaultTask
