const gulp   = require('gulp')
const del    = require('del')
const path   = require('path')
const rename   = require('gulp-rename')
const gulpreplace   = require('gulp-replace')
const yargs = require('yargs');
const util = require('../lib/util');

const fs = require('fs');

const componentId = yargs.argv.component;
const pageId = yargs.argv.page;

const paths = {
	src: './ops/misc',
    dest: {
        lib: './src',
        docs: './docs'
    }
}

const paths = {
	src: './src'
}

const createTask = (cb) => {

    if (!componentId) {
        return;
    }
    let componentName = util.namerize(componentId);
    let componentMethod = util.methodize(componentId);

    //scss
    gulp.src(`${paths.src}/src-tmpl.scss`)
        .pipe(rename(`${componentId}.scss`))
        .pipe(gulpreplace('__COMPONENT_ID__',componentId))
        .pipe(gulp.dest(`${paths.dest.lib}/styles/components`));

    //json
    gulp.src(`${paths.src}/src-tmpl.json`)
        .pipe(rename(`${componentId}.json`))
        .pipe(gulpreplace('__COMPONENT_ID__',componentId))
        .pipe(gulpreplace('__COMPONENT_NAME__',componentName))
        .pipe(gulp.dest(`${paths.dest.lib}/data`));

    //html
    gulp.src(`${paths.src}/src-tmpl.html`)
        .pipe(rename(`${componentId}.html`))
        .pipe(gulpreplace('__COMPONENT_ID__',componentId))
        .pipe(gulpreplace('__COMPONENT_METHOD__',componentMethod))
        .pipe(gulp.dest(`${paths.dest.lib}/templates`));

    if (!pageId) {
        return;
    }
    let pageName = util.namerize(pageId);
    //html
    gulp.src(`${paths.src}/docs-tmpl.html`)
        .pipe(rename(`${pageId}.html`))
        .pipe(gulpreplace('__COMPONENT_ID__',componentId))
        .pipe(gulpreplace('__COMPONENT_NAME__',componentName))
        .pipe(gulpreplace('__COMPONENT_METHOD__',componentMethod))
        .pipe(gulp.dest(`${paths.dest.docs}/styleguide/components`));

    //json
    gulp.src(`${paths.src}/docs-tmpl.json`)
        .pipe(rename(`${pageId}.json`))
        .pipe(gulpreplace('__PAGE_NAME__',pageName))
        .pipe(gulp.dest(`${paths.dest.docs}/data`));

}

gulp.task('create', createTask);
module.exports = createTask
