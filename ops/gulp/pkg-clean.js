const gulp   = require('gulp')
const del    = require('del')

let environment = require('../lib/environment')

/*
when running locally, the package is built to tmp
the checked-in version of the package should only be built for releases and not features
*/
const paths = {
	dest: !environment.production ? 'tmp' : 'dist'
}

const task = (cb) => {
    return del([`./${paths.dest}/`]);
}

gulp.task('pkg-clean', task);
module.exports = task
