const gulp = require('gulp');

// copy svg file 
const task = (cb) => {
    return gulp.src('./src/icons/css/*.svg')
           .pipe(gulp.dest("./src/styles/icons"));
}

gulp.task('icons-svg', task);
module.exports = task;