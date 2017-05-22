const gulp = require('gulp');
const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const gulp_jslint = require('gulp-jslint');

let environment = require('../lib/environment');

const paths = {
    src: './src/scripts',
    dest: './www/js'
}

let techneDestJS = environment.production ? 'techne-all.min.js' : 'techne-all.js';

const task = (cb) => {
    return gulp.src([`${paths.src}/*`])
        .pipe(gulp_jslint())
        .pipe(gp_concat('concat.js'))
        .pipe(gulpif(environment.production, gp_uglify('uglify.js')))
        .pipe(gp_rename(techneDestJS))
        .pipe(gulp.dest(paths.dest));
}

gulp.task('docs-js', task);
module.exports = task;