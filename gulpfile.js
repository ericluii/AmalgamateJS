const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const jsdoc = require('gulp-jsdoc3');

gulp.task('jshint', function() {
  return gulp.src(['./lib/**/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'))
             .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  return gulp.src(['./lib/**/*.js'])
             .pipe(jscs({fix: true}))
             .pipe(jscs.reporter())
             .pipe(gulp.dest('lib'))
             .pipe(jscs.reporter('fail'));
});

gulp.task('doc', function(cb) {
  var config = require('./jsdoc.json');
  gulp.src(['README.md', './lib/**/*.js'], {read: false})
      .pipe(jsdoc(config, cb));
});

gulp.task('default', function() {
  gulp.start('jshint', 'jscs');
});
