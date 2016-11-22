const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const esdoc = require('gulp-esdoc');

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

gulp.task('docs', function() {
  return gulp.src('./lib')
             .pipe(esdoc({ destination: "./docs" }));
});

gulp.task('default', function() {
  gulp.start('jshint', 'jscs');
});
