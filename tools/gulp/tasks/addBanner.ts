/// <reference path="../../../typings/modules/gulp/index.d.ts" />
import * as gulp from 'gulp';
import { TechneDist, TechneCssComponentPaths, TechneSourceBanner } from '../config';

var header = require('gulp-header');

function addBanner() {
    return gulp
        .src(TechneCssComponentPaths)
        .pipe(header(TechneSourceBanner))
        .pipe(gulp.dest(TechneDist));
}

gulp.task('addBanner', addBanner);

