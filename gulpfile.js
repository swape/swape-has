'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

/* minify */
gulp.task('minify', function () {
  return gulp.src('src/index.js')
    .pipe($.uglifyjs('index.min.js'))
    .pipe(gulp.dest('src/'));
});

gulp.task('default', ['minify']);
