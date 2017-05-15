const gulp   = require('gulp')
const del    = require('del')

const task = (cb) => {
    return del(['./www/**/*']);
}

gulp.task('docs-clean', task);
module.exports = task
