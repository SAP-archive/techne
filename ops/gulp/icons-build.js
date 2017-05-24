const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");
const gulpSequence = require('gulp-sequence')

// svgSprite configuration
const config = {
    templates: { css: require("fs").readFileSync("./src/icons/icons-template.css", "utf-8") },
    selector: "hyicon-%f",
    common: "hyicon",
    svg: { sprite: "css/icons.svg" },
    cssFile: "css/icons.css",
    preview: {sprite: "icons.html"}
};

// generate icons 
const generateIcons = (cb) => {
    return gulp.src('./src/icons/raw-svg/*.svg')
           .pipe(svgmin())
           .pipe(svgSprite(config))
           .pipe(gulp.dest("./src/icons"))
}

gulp.task('generateIcons', generateIcons);
module.exports = generateIcons;

// copy svg file 
const copyIconsSvg = (cb) => {
    return gulp.src('./src/icons/css/*.svg')
           .pipe(gulp.dest("./www/css"));
}

gulp.task('copyIconsSvg', copyIconsSvg);
module.exports = copyIconsSvg;


// copy css file 
const copyIconsCss = (cb) => {
    return gulp.src('./src/icons/css/*.css')
           .pipe(gulp.dest("./src/styles/icons/"));
}

gulp.task('copyIconsCss', copyIconsCss);
module.exports = copyIconsCss;
