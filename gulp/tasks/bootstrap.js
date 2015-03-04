var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var minifyCSS    = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').bootstrap;

gulp.task('bootstrap', function () {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(minifyCSS({keepBreaks:true}))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
