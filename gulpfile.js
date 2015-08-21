var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.start('javascript', 'sass');
});

gulp.task('javascript', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/foundation/js/vendor/modernizr.js',
      './bower_components/foundation/js/foundation.min.js',
      './src/assets/javascripts/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass', function () {
  gulp.src([
      './bower_components/foundation/scss/normalize.scss',
      './bower_components/foundation/scss/foundation.scss',
      './bower_components/sweetalert/dist/sweetalert.css',
      './src/assets/stylesheets/style.scss'
    ])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('./src/assets/stylesheets/*.scss', ['sass']);
  gulp.watch('./src/assets/javascripts/*.js', ['javascript']);
});
