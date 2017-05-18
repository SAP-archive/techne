/// <reference path="../../../typings/modules/gulp/index.d.ts" />
import * as gulp from 'gulp';
import { TechneDist, TechneSassPaths, TechneCssComponentPaths, TechneCompiledFilename, 
         SassConfig, CleanCSSConfig } from '../config';

var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var cssNano = require('gulp-cssnano');
var cssFormat = require('gulp-css-format');
var cleanCSS = require('gulp-clean-css');
var cssComb = require('gulp-csscomb');
var runSequence = require('run-sequence');

function buildComponents() {
    return gulp
        .src(TechneSassPaths)
        .pipe(sass(SassConfig).on('error', sass.logError))
        //.pipe(cssNano())
        .pipe(cleanCss(CleanCSSConfig))
        .pipe(cssFormat())
        .pipe(cssComb())
        .pipe(gulp.dest(TechneDist));
}

gulp.task('buildComponents', buildComponents);

function concatComponents() {
    return gulp
        .src(TechneCssComponentPaths)
        .pipe(concat(TechneCompiledFilename))
        .pipe(gulp.dest(TechneDist));
}

gulp.task('concatComponents', concatComponents);

// Main task

function build(callback: any) {
    runSequence(
        'clean', 
        'buildComponents', 
        //'concatComponents',
        'addBanner'
    );
    callback();
}

gulp.task('build', build);

