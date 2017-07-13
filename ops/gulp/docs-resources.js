const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const task = (cb) => {
  return gulp.src('./docs/resources/**/*')
    .pipe(imagemin(
      [imagemin.svgo({
          plugins: [{removeTitle: true}, {cleanupIDs: true}]
      })]
    ))
    .pipe(gulp.dest('./www/'));
}

gulp.task('docs-resources', task)
module.exports = task