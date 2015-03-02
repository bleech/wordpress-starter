var gulp      = require('gulp');
var config    = require('../config').copy;
var size      = require('gulp-filesize');

gulp.task('copy', function() {
  return gulp.src(config.src, { base: config.base })
    .pipe(gulp.dest(config.dest));
    // .pipe(size());
})
