const gulp   = require('gulp')
const del    = require('del')
const path   = require('path')
const config = require('../config')
const yargs = require('yargs');

const fs = require('fs');

const componentName = yargs.argv.component;

const paths = {
	src: './src'
}

const createTask = (cb) => {

  if (!componentName) {
    return;
  }

  fs.writeFile(`${paths.src}/data/${componentName}.json`, `{\n\t"id": "${componentName}"\n}`, function (err) {
    if (err) return console.log(err);
  });

  fs.writeFile(`${paths.src}/styles/components/${componentName}.scss`, `.${componentName} {\n\n}`, function (err) {
    if (err) return console.log(err);
  });

  fs.writeFile(`${paths.src}/templates/${componentName}.html`, `{% set ${componentName} = components.${componentName} %}\n{{ ${componentName} }}`, function (err) {
    if (err) return console.log(err);
  });


}

gulp.task('create', createTask);
module.exports = createTask
