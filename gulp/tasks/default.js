var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
  gulp.start(['stylus', 'images', 'jadePHP', 'copy', 'concat', 'watch']);
});
