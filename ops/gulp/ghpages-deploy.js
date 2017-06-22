var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

//Task for deploying compiled HTML to gh-pages branch for GitHub Pages hosting
gulp.task('deploy', function() {
    
  return gulp.src('./www/**/*')
    .pipe(ghPages());
});
