const gulp = require('gulp')
const foo = require('./foo')

const task = (cb) => {
    foo.log('ghjgjhghgfhg');
    console.log('0000');

}



gulp.task('test', task)
module.exports = task
