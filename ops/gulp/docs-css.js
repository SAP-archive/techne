const gulp = require('gulp')
const gulpSequence    = require('gulp-sequence')

const config = require('../config')
let environment = require('../lib/environment')

const debug = require('gulp-debug');

const task = (cb) => {


	//assets are served from dist file when running locally
	//if(environment.production) {

	  return gulp.src('./dist/css/*.css')
		  .pipe(debug())
		  .pipe(gulp.dest('./www/css'));

	//}
	
	

}



gulp.task('docs-css', ['css'], task)
module.exports = task
