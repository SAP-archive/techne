const gulp   = require('gulp')
const del    = require('del')
const path   = require('path')
const config = require('../config')

const cleanTask = (cb) => {
	//remove contents of package and docs distribution directories
	del([
  		path.join(config.root.dest, '/**/*'), 
  		path.join('!', config.root.dest),
  		path.join(config.root.www, '/**/*'), 
  		path.join('!', config.root.www)
	]).then(function (paths) {
		cb()
	})
}

gulp.task('clean', cleanTask);
module.exports = cleanTask
