/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify','browserSync'], function(callback) {
  var stylus = []
    .concat(config.stylus.src)
    .concat(config.sprites.spriteJPG.src)
    .concat(config.sprites.spritePNG.src);
  gulp.watch(stylus,              ['stylus']);
  gulp.watch(config.images.src,   ['images']);
  gulp.watch(config.jadePHP.src,  ['jadePHP']);
  gulp.watch(config.copy.src,     ['copy']);

  Object.keys(config.concat).forEach(function(key) {
    gulp.watch(config.concat[key].src, ['concat:' + key]);
  });
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
