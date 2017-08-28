const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const config = require('../config');
const path = require('path');
const consolidate = require('gulp-consolidate');
const rename = require("gulp-rename");

module.exports = iconTask = (cb) => {

    function mapGlyphs (glyph) {
        return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
    }

    return gulp.src(path.join(config.root.icons, config.tasks.icons.svgs.path, '*.svg'))
        .pipe(iconfont(config.tasks.icons.iconfont))
        .on('glyphs', (glyphs) => {
            const options = {
                className: config.tasks.icons.iconfont.className,
                fontName: config.tasks.icons.iconfont.fontName,
                fontPath: '/fonts/',
                glyphs: glyphs.map(mapGlyphs)
            }
            //process the CSS template
            gulp.src(config.tasks.icons.css.template)
                .pipe(consolidate('lodash', options))
                .pipe(rename(config.tasks.icons.css.outputName))
                .pipe(gulp.dest(config.tasks.icons.css.dest))
            //process the data template
            gulp.src(config.tasks.icons.data.template)
                .pipe(consolidate('lodash', options))
                .pipe(rename(config.tasks.icons.data.outputName))
                .pipe(gulp.dest(config.tasks.icons.data.dest))
        })
        .pipe(gulp.dest(config.tasks.icons.css.dest));


}
gulp.task('iconfont', iconTask);






const svgmin = require('gulp-svgmin');
const svgSprite = require("gulp-svg-sprites");

// svgSprite configuration
const configBAK = {
    templates: {
        css: require("fs").readFileSync("./src/icons/techne-icons-template.css", "utf-8"),
        previewSprite: require("fs").readFileSync("./src/icons/techne-icons-template.html", "utf-8")
    },
    selector: "hyicon-%f",
    common: "hyicon",
    svg: { sprite: "scss/icons/techne-icons.svg" },
    cssFile: "scss/icons/icons.css",
    preview: {sprite: "test/templates/icons/index.njk"}
}

// generate icons
const task = (cb) => {
    return gulp.src('./src/icons/raw-svg/*.svg')
           .pipe(svgmin())
           .pipe(svgSprite(configBAK))
           .pipe(gulp.dest("./"))
}

gulp.task('icons', task);
module.exports = task;
