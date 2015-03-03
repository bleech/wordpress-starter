var gulp      = require('gulp');
var config    = require('../config').copy;
var browserSync  = require('browser-sync');

gulp.task('copy', function() {
  return gulp.src(config.src, { base: config.base })
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
})
