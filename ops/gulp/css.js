const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const handleErrors = require('../lib/handleErrors');
const debug = require('gulp-debug');
const rename = require("gulp-rename");
const gulpif = require('gulp-if');

let environment = require('../lib/environment')

//DATA
//src: `${config.root.src}/${config.tasks.css.src}/**/*.${config.tasks.css.extensions}`,
const paths = {
	src: `${config.root.src}/${config.tasks.css.src}/*.${config.tasks.css.extensions}`,
	ignore: [
		`!${config.root.src}/${config.tasks.css.src}/**/_*.${config.tasks.css.extensions}`,
		`!${config.root.src}/${config.tasks.css.src}/theme/**/*`
	],
	debug: `${config.root.src}/${config.tasks.css.src}/debug.${config.tasks.css.extensions}`,
	dest: `${config.root.dest}/${config.tasks.css.dest}`
}

const cssTask = () => {
	cssSass();	


}

/*
Only top-level files should be prefixed, 
	individual components files can retain their simple names, i.e., 

	dist/css/techne-all.css
	dist/css/techne-core.css
	dist/css/core/elements.css
*/

var renameFile = function (file) {
	//ignore files in core, layout, components dirs 
	var matches = file.path.indexOf('/src/styles/core/') == -1 && file.path.indexOf('/src/styles/layout/') == -1 && file.path.indexOf('/src/styles/components/') == -1;
	return matches;
}

const cssSass = () => {

	var  ignore = paths.ignore;
	if (!environment.debug) {
		ignore.push(`!${paths.ignore}`);
	}

  return gulp.src([paths.src,...paths.ignore])
  	.pipe(debug())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(renameFile, rename({
		prefix: "techne-"
	})))
    .pipe(gulp.dest(paths.dest))
}


gulp.task('css', cssTask);
module.exports = cssTask;
