var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var resize     = require('gulp-image-resize');
var rename     = require('gulp-rename');
var gulpFilter = require('gulp-filter');
var config     = require('../config').images;
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var cloneSink  = require('gulp-clone').sink();

gulp.task('images', ['sprites'], function() {
  var retinaFilter = gulpFilter('**/*@2x.*');
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(retinaFilter)
    .pipe(cloneSink)
    .pipe(resize({
      imagemagick: true,
      width: '50%',
      height: '50%'
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('@2x', '');
      return path;
    }))
    .pipe(cloneSink.tap())
    .pipe(retinaFilter.restore())
    .pipe(imagemin()) // Optimize
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
