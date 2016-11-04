'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {

  //static files
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('src/assets/fonts/**/*', ['fonts']);
  gulp.watch('src/assets/icons/**/*', ['icons']);

  //scripts
  gulp.watch('src/**/*.js', ['scripts']);

  //styles
  gulp.watch([
    'src/**/*.scss',
    '!src/assets/vendor/**/*'
  ], ['styles']);
});
