const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

let environment = require('../lib/environment');

const task = (cb) => {

    gulpSequence('pkg-build', 'docs-clean', ['docs-resources', 'docs-html', 'docs-css', 'docs-styleguide', 'docs-js'], cb);

}

gulp.task('docs-build', task);
module.exports = task;
