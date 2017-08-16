const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

let environment = require('../lib/environment');

const paths = {
	src: !environment.production ? './tmp/css' : './dist/css',
	dest: './docs/_site/css',
	srcMarkup: './src/templates',
	destMarkup: './docs/_includes'
}

const iconsSvg = (cb) => {
    return gulp.src(['${paths.src}/*.svg'])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('docs-iconsSvg', iconsSvg);
// module.exports = task;

const iconsMarkup = (cb) => {
    return gulp.src([`${paths.srcMarkup}/icons.html`])
		.pipe(gulp.dest(paths.destMarkup));
}

gulp.task('docs-iconsMarkup', iconsMarkup);
// module.exports = task;


const task = (cb) => {

    gulpSequence('docs-iconsSvg', 'docs-iconsMarkup', cb);

}
gulp.task('docs-icons', task);
module.exports = task;
