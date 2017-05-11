const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks-html');
const data = require('gulp-data');
const handleErrors = require('../lib/handleErrors');
const debug = require('gulp-debug');
const yargs = require('yargs');
const requireDir = require('require-dir')

const docsData = require('../lib/data');

let environment = require('../lib/environment')
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

/*
compiles nunjucks templates
    serves as primitive controller to inject data into templates
    app = app.json data file
    page = <page_key>.json data file
    components = src/data/<component>.json data files (assembled above)
*/
const buildDocs = () => {
    //these simply create the objects for the templates
    const setAppData = function(file) {
        var app = docsData.getDocsAppData(file);
        return { app: app }
    };
    const setPageData = function(file) {
        var page = docsData.getDocsPageData(file);
        return { page: page }
    };
    //only process main HTML files, not includes, templates, or macros
	return gulp.src([`${docs.src.html}/**/*.html`, `!${docs.src.layouts}/**/*`, `!${docs.src.includes}/**/*`, `!${docs.src.macros}/**/*` ])
        .pipe(data(setPageData))
        .pipe(data(setAppData))
		.pipe(nunjucks({
			searchPaths: [docs.src.layouts, docs.src.includes, docs.src.macros, './src/templates/'],
			locals: {
                components: docsData.getDocsComponentData(),
				date: new Date(),
				env: environment.production ? 'production':'development',
				debug: debugMode
			}
		}))
		.pipe(debug())
        .pipe(gulp.dest(docs.dest.root))
}

gulp.task('docs-html', buildDocs);
module.exports = buildDocs;