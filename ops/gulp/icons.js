const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");

// svgSprite configuration
const config = {
    templates: {
        css: require("fs").readFileSync("./icons/templates/techne-icons-template.css", "utf-8"),
        previewSprite: require("fs").readFileSync("./icons/templates/techne-icons-template.html", "utf-8")
    },
    selector: "tn-icon-%f",
    common: "tn-icon",
    svg: { sprite: "./../scss/icons/techne-icons.svg" },
    cssFile: "./../scss/icons/icons.css",
    baseSize: 16,
    preview: {sprite: "./../test/templates/icons/index.njk"}
};

// generate icons
const task = (cb) => {
    return gulp.src('./icons/raw-svg/*.svg')
           .pipe(svgmin())
           .pipe(svgSprite(config))
           .pipe(gulp.dest("./icons"))
}

gulp.task('icons', task);
module.exports = task;
