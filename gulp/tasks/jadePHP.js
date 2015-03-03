var gulp = require('gulp');
var config = require('../config').jadePHP;
var jadePHP = require('gulp-jade-php');
var browserSync  = require('browser-sync');

gulp.task('jadePHP', function() {
  return gulp.src(config.src)
    .pipe(jadePHP())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
