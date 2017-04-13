const gulp = require('gulp')
const gulpSequence    = require('gulp-sequence')

const config = require('../config')
let environment = require('../lib/environment')


const task = (cb) => {
	gulpSequence('docs-clean', ['docs-resources', 'docs-html', 'docs-css'], cb)

	

}



gulp.task('docs-build', task)
module.exports = task
