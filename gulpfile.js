var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('styles', () => {
  return gulp.src('style/*.css')
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(csso())
  .pipe(gulp.dest('build/style'))
});

gulp.task('scripts', () => {
  return gulp.src('logic/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/logic'))
});

gulp.task('pages', () => {
  return gulp.src('*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('build'));
});