'use strict';


var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');


var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('html', function() {
  return gulp.src([
    'src/components/**/*.html',
    'src/pages/**/*.html',
    'src/index.html'
  ], {base: "src"})
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});
