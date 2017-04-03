const gulp = require('gulp')

let environment = require('./lib/environment')

const init = (cb) => {
	console.log('hi');

}


const task = (cb) => {
	
	init();

	
}

gulp.task('test', task)
module.exports = task
