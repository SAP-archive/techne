const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const task = (cb) => {
  return gulp.src('./docs/resources/svgs/**/*.svg')
    .pipe(imagemin(
      [imagemin.svgo({
          plugins: [{removeTitle: true}, {cleanupIDs: true}]
      })]
    ))
    .pipe(gulp.dest('./www/svg/'));
}

gulp.task('docs-resources', task)
module.exports = task
