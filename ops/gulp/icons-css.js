const gulp = require('gulp');

// copy css file 
const task = (cb) => {
    return gulp.src('./src/icons/css/*.css')
           .pipe(gulp.dest("./src/styles/icons/"));
}

gulp.task('icons-css', task);
module.exports = task;
