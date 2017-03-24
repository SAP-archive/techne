const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const gulpLess = require('gulp-less');
const path = require('path');
const handleErrors = require('./lib/handleErrors');

const paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.' + config.tasks.css.extensions),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

const cssTask = () => {
  return gulp.src(paths.src)
    .pipe(gulpLess())
    .pipe(gulp.dest(paths.dest));
}

gulp.task('css', cssTask);
module.exports = cssTask;
