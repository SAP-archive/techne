const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');

gulp.task('dev-jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build', '--watch', '--incremental', '--drafts'], { cwd: 'docs' });

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});