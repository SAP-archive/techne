const config = require('../config');
//if(!config.tasks.js) { return }

const gulp = require('gulp');
const path = require('path')
const nunjucks = require('gulp-nunjucks-html')
const data = require('gulp-data')
const yargs = require('yargs')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

let environment = require('./lib/environment')
let debugMode = yargs.argv.debug;

//DATA
const docs = {
	src: {
		root: './src',
		data: './src/data',
		html: './src/templates',
		macros: './src/macros'
	},
	dest: {
		root: './dist',
		html: './dist/html',
		components: './dist/html/components'
	}
}



// HELPERS
// get key from file name, e.g. index.html returns index
const getPageKey = (file) => {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}

let components = {};
const getComponentData = function(file) {

  try {
		var key = getPageKey(file);
		var _component = require(`../../src/data/${key}.json`); 
		components[key] = _component;
    return { components: components };
  } catch(err) {
    console.log(err.message);
  }
  return { components: {} };
};



// TASKS
const task = () => {

	
	buildComponents();


}


const date = new Date();

// build static HTML files
const buildComponents = () => {


	return gulp.src([`${docs.src.html}/**/*.html`, `!${docs.src.macros}/**/*` ])
		.pipe(data(getComponentData))
		.pipe(nunjucks({
			searchPaths: [ docs.src.macros, docs.src.html ],
			locals: {
				date: date,
				env: environment.production ? 'production':'development',
				debug: debugMode
			}
		}))
		.pipe(gulpif(debugMode, debug()))
     .pipe(gulp.dest(docs.dest.components))

}



gulp.task('html', task);
module.exports = task;
