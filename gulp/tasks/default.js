var gulp = require('gulp');

gulp.task('default', ['clean', 'bootstrap'], function() {
  gulp.start(['coffeelint', 'stylus', 'images', 'jadePHP', 'copy', 'concat', 'watch']);
});
