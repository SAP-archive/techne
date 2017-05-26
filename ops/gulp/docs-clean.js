const config = require('../config');

const gulp = require('gulp');
const del = require('del');

const task = (cb) => {
    return del([config.root.www]);
}

gulp.task('docs-clean', task);
module.exports = task;
