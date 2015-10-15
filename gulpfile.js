'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var handlebars = require('handlebars');

gulp.task('connect', function() {
  connect.server({
    root: 'site',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('site/*.html')
    .pipe(connect.reload());
});

gulp.task('watchHtml', function () {
  gulp.watch(['site/*.html'], ['html']);
});

gulp.task('styles', function() {
    gulp.src('site/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('site/assets/css/'));
});

gulp.task('watchStyles', function() {
    gulp.watch('site/assets/scss/*.scss',['styles', 'html']);
});

gulp.task('watchScripts', function() {
    gulp.watch('site/assets/js/*.js',['html']);
});



gulp.task('default', ['connect', 'watchHtml', 'watchStyles', 'watchScripts']);