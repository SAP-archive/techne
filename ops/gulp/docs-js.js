const gulp = require('gulp');
const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const gulp_eslint = require('gulp-eslint');

let environment = require('../lib/environment');

const paths = {
    src: './docs/styleguide/scripts',
    dest: './www/js'
}

let techneDestJS = environment.production ? 'techne-styleguide.min.js' : 'techne-styleguide.js';

const task = (cb) => {
    return gulp.src([`${paths.src}/*`])
        .pipe(gulp_eslint({
            'rules': {
                'quotes': [1, 'single'],
                'semi': [1, 'always']
            }
        }))
        .pipe(gp_concat('concat.js'))
        .pipe(gulpif(environment.production, gp_uglify('uglify.js')))
        .pipe(gp_rename(techneDestJS))
        .pipe(gulp_eslint.format())
        .pipe(gulp_eslint.failOnError())
        .pipe(gulp.dest(paths.dest));
}

gulp.task('docs-js', task);
module.exports = task;