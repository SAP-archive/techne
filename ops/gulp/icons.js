const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");

// svgSprite configuration
const config = {
    templates: {
        css: require("fs").readFileSync("./src/icons/techne-icons-template.css", "utf-8"),
        previewSprite: require("fs").readFileSync("./src/icons/techne-icons-template.html", "utf-8")
    },
    selector: "hyicon-%f",
    common: "hyicon",
    svg: { sprite: "scss/icons/techne-icons.svg" },
    cssFile: "scss/icons/icons.css",
    preview: {sprite: "test/templates/icons/index.njk"}
};

// generate icons
const task = (cb) => {
    return gulp.src('./src/icons/raw-svg/*.svg')
           .pipe(svgmin())
           .pipe(svgSprite(config))
           .pipe(gulp.dest("./"))
}

gulp.task('icons', task);
module.exports = task;
