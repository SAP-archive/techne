/// <reference path="../../../typings/modules/gulp/index.d.ts" />
import * as gulp from 'gulp';

const gulpClean = require('gulp-clean');

import { TechneDist } from '../config';

function cleanTask() {
    return gulp
      .src(TechneDist, { read: false })
      .pipe(gulpClean(null));
}

gulp.task('clean', cleanTask);