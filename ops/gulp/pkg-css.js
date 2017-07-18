const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const debug = require('gulp-debug');
const replace = require('gulp-replace');

let environment = require('../lib/environment');

const paths = {
	src: './src/styles',
	dest: !environment.production ? 'tmp/css' : 'dist'
}

const task = (cb) => {

    let prefix = 'techne';
    let techneCss = `${paths.src}/all.scss`;//environment.production ? `${paths.src}/*.scss` : `${paths.src}/all.scss`;
    let helpersCss = `${paths.src}/helpers.scss`;
    if (environment.debug) {
        techneCss = `${paths.src}/debug.scss`;
    }
    let ignoreGlobs = ['!./src/styles/**/_*','!./src/styles/theme/**/*'];

    var isAllCss = function (file) {
      return file.path.includes('all') ;
    }

    return gulp.src([techneCss,helpersCss,...ignoreGlobs])
        .pipe(gulpif(environment.development, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(environment.production, autoprefixer({
    		browsers: ['last 2 versions'],
    		cascade: true
    	})))
        .pipe(gulpif(environment.production, cleanCSS({
            format: 'beautify'
        })))
        // .pipe(rename({
        //     prefix: `${prefix}-`
        // }))
        .pipe(gulpif(isAllCss, rename({
            basename: prefix
        })))
        .pipe(gulpif(environment.development, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest))

}

gulp.task('pkg-css', task);
module.exports = task;
