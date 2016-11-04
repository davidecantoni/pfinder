'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');


var minify = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var browserSync = require('browser-sync');


var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('styles', function() {
  return gulp.src([
    'src/main.scss'
  ])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())


    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'iOS 8'],
      cascade: false
    }))
    .pipe(minify({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({stream:true}));

});
