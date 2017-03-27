const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const handleErrors = require('./lib/handleErrors');

const paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.' + config.tasks.css.extensions),
  ignore: path.join(config.root.src, config.tasks.css.src, '/**/_*.' + config.tasks.css.extensions),
  themes: path.join(config.root.src, config.tasks.css.src, '/theme/*.' + config.tasks.css.extensions),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}


const cssTask = () => {
	//cssLog(paths);
	cssSass();
	
	cssLog('gulp css: complete');
}

const cssLog = (str) => {
	console.log(str);
}

const cssSass = () => {
  return gulp.src([paths.src,`!${paths.ignore}`,`!${paths.themes}`])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest));
}


gulp.task('css', cssTask);
module.exports = cssTask;
