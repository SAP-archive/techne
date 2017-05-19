const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");

const task = (cb) => {
    return gulp.src('./src/icons/raw-svg/*.svg')
    .pipe(svgmin())
    .pipe(svgSprite({
        selector: "hyicon-%f",
        common: "hyicon",
        templates: { scss: true }
    }))
    .pipe(gulp.dest("./src/icons"));
}

gulp.task('hyicon', task);
module.exports = task;