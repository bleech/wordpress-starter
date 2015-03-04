var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
  gulp.start(['coffeelint', 'stylus', 'images', 'jadePHP', 'copy', 'concat', 'watch']);
});
