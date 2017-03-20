import * as gulp from 'gulp';

import './tasks/clean';
import './tasks/build';

gulp.task('default', ['clean']);
