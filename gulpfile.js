// This gulpfile is a total rip off of this:
// https://github.com/greypants/gulp-starter

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', function () {
  connect.server({
    root: '.',
    port: 8000,
    livereload: true
  });
});
