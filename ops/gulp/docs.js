const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const path = require('path');
const nunjucks = require('gulp-nunjucks-html');
const data = require('gulp-data');
const handleErrors = require('./lib/handleErrors');
const debug = require('gulp-debug');
const yargs = require('yargs');

let environment = require('./lib/environment')
let debugMode = yargs.argv.debug;

//DATA
const docs = {
	src: {
		root: './docs',
		data: './docs/data',
		html: './docs/styleguide',
		layouts: './docs/styleguide/templates',
		includes: './docs/styleguide/includes',
		macros: './docs/styleguide/macros'
	},
	dest: {
		root: './www'
	}
}

const pkg = require('../../package.json');
const app = require('../../docs/data/app.json');
const nav = require('../../docs/data/nav.json');
let page = {};
let components = {};


// HELPERS
// get key from file name, e.g. index.html returns index
const getPageKey = (file) => {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}

const getAppData = function(file) {
  try {
    return { app: app };
  } catch(err) {
    console.log(err.message);
  }
  return { app: {} };
};

const getNavData = function(file) {
  try {
    //set menu states
    var selectedId = getPageKey(file);
    nav.menu.forEach(function (obj) {
      obj.selected = obj.id === selectedId || selectedId.indexOf(obj.id) !== -1;
    });
    return { nav: nav };
  } catch(err) {
    console.log(err.message);
  }
  return { nav: {} };
};

const getPageData = function(file) {
  try {
    var key = getPageKey(file);
    var page = require(`../../docs/data/${key}.json`); 
    page.id = key;
    return { page: page };
  } catch(err) {
    console.log(err.message);
  }
  return { page: {} };
};


const getComponentData = function(file) {
	var _components = ["button"];
  try {

	for (i = 0; i < _components.length; i++) {
		var key = _components[i];
		var _component = require(`../../src/data/${key}.json`); 
		components[key] = _component;
	}
    //console.log(components);
    return { components: components };
  } catch(err) {
    console.log(err.message);
  }
  return { components: {} };
};


// TASKS


const docsTask = () => {

	
	buildHtml();


}


const date = new Date();

// build static HTML files
const buildHtml = () => {


	return gulp.src([`${docs.src.html}/**/*.html`, `!${docs.src.layouts}/**/*`, `!${docs.src.includes}/**/*`, `!${docs.src.macros}/**/*` ])
		.pipe(data(getAppData))
		.pipe(data(getPageData))
		.pipe(data(getNavData))
		.pipe(data(getComponentData))
		.pipe(nunjucks({
			searchPaths: [docs.src.layouts, docs.src.includes, docs.src.macros, './src/templates/'],
			locals: {
				date: date,
				env: environment.production ? 'production':'development',
				debug: debugMode
			}
		}))
		.pipe(debug())
     	.pipe(gulp.dest(docs.dest.root))

}



gulp.task('docs', docsTask);
module.exports = docsTask;
