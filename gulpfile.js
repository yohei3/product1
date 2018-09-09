var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./htdocs/common/css'));
});

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
