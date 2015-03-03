var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['karma', 'clean'], function(){
  // This runs only if the karma tests pass
  gulp.start(['markup', 'images', 'copy', 'concat', 'iconFont', 'minifyCss', 'uglifyJs'])
});
