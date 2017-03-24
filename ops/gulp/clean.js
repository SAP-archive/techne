const gulp   = require('gulp')
const del    = require('del')
const path   = require('path')
const config = require('../config')

const cleanTask = (cb) => {
  del([path.join(config.root.dest, '/**'), path.join('!', config.root.dest)]).then(function (paths) {
    cb()
  })
}

gulp.task('clean', cleanTask);

module.exports = cleanTask
