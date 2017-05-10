const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks-html');
const data = require('gulp-data');
const handleErrors = require('../lib/handleErrors');
const debug = require('gulp-debug');
const yargs = require('yargs');

const util = require('../lib/data');

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


let components = {};
const getComponentData = function(file) {
    var _components = ["button"];
    try {
        for (i = 0; i < _components.length; i++) {
            var key = _components[i];
            var _component = require(`../../src/data/${key}.json`);
            components[key] = _component;
        }
        console.log(components);
        return { components: components };
    } catch(err) {
        console.log(err.message);
    }
    return { components: {} };
};




// TASKS
// build static HTML files
const buildDocs = () => {
    //main app data is set here, but it is modified below with each HTML file to set the selected item
    let app = util.getDocsAppData();

console.log(app.nav.menu);

	return gulp.src([`${docs.src.html}/**/*.html`, `!${docs.src.layouts}/**/*`, `!${docs.src.includes}/**/*`, `!${docs.src.macros}/**/*` ])
		//.pipe(data(app))
        .pipe(data(util.setDocsAppNavSelectedItem(app)))
		//.pipe(data(util.getDocsNavData))
		.pipe(data(util.getDocsPageData))
		.pipe(data(getComponentData))
		//.pipe(data(util.getSrcComponentData))
		.pipe(nunjucks({
			searchPaths: [docs.src.layouts, docs.src.includes, docs.src.macros, './src/templates/'],
			locals: {
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
