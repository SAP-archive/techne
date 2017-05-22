const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");

const task = (cb) => {
    return gulp.src('./src/icons/raw-svg/*.svg')
    .pipe(svgmin())
    .pipe(svgSprite({
        selector: "hyicon-%f",
        common: "hyicon",
        svg: { sprite: "icons.svg" },
        cssFile: "icons.css",
        preview: {sprite: "icons.html"}
    }))
    .pipe(gulp.dest("./src/icons"));
}

gulp.task('icons', task);
module.exports = task;