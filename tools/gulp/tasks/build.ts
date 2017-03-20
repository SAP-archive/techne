/// <reference path="../../../typings/modules/gulp/index.d.ts" />
import * as gulp from 'gulp';
import { TechneDist, TechneSassPaths, TechneCssComponentPaths, TechneCompiledFilename, SassConfig } from '../config';

var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');

function buildComponents() {
    gulp
        .src(TechneSassPaths)
        .pipe(sass(SassConfig).on('error', sass.logError))
        //.pipe(cleanCss())
        .pipe(gulp.dest(TechneDist));
}

gulp.task('buildComponents', buildComponents);

function concatComponents() {
    gulp
        .src(TechneCssComponentPaths)
        .pipe(concat(TechneCompiledFilename))
        .pipe(gulp.dest(TechneDist));
}

gulp.task('concatComponents', concatComponents);

// Main task
gulp.task('build', ['buildComponents', 'concatComponents']);

