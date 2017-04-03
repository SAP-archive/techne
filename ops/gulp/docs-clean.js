const gulp   = require('gulp')
const del    = require('del')
const path   = require('path')
const config = require('../config')


const cleanTask = (cb) => {
	return del([path.join(config.root.www, '/**/*')]);
}

gulp.task('docs-clean', cleanTask);
module.exports = cleanTask
