var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').stylus;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', ['sprites'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(stylus(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
