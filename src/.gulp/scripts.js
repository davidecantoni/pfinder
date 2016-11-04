'use strict';


var gulp = require('gulp');

var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

var jshint = require('gulp-jshint');

var browserSync = require('browser-sync');


var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('scripts', function() {
  return gulp.src([
    'src/assets/javascript/**/*.js',
    'src/main.js',
    'src/components/**/*.js',
    'src/pages/**/*.js'
  ])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/javascript'))
    .pipe(browserSync.reload({stream:true}));
});
