const config = require('../config');
if(!config.tasks.js) { return }

const gulp = require('gulp');
const handleErrors = require('./lib/handleErrors');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();

var server;

//DATA


// HELPERS


// TASKS
const serveTask = () => {


    browserSync.init({
        server: {
            baseDir: [ config.tasks.browserSync.server.baseDir, config.root.dest ],
            open: true,
			reloadOnRestart: true,
			reloadDelay: 100
        }
    });
  

}




gulp.task('serve', serveTask);
module.exports = serveTask;
