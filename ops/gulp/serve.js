const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();

const serveTask = () => {
	
	//init server
    browserSync.init({
        server: {
            baseDir: [ config.tasks.browserSync.server.baseDir, config.root.dest ],
            open: true,
		    index: "index.html",
			reloadOnRestart: true,
			reloadDelay: 100
        }
    });
    
   	//reload watch
	browserSync.watch(`${config.tasks.browserSync.server.baseDir}/**/*.html`).on("change", browserSync.reload);
	browserSync.watch(`${config.tasks.browserSync.server.baseDir}/css/**/*.css`).on("change", browserSync.reload);

}


gulp.task('serve', serveTask);
module.exports = serveTask;
