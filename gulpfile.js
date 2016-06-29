var gulp = require('gulp');
var serve = require('gulp-serve');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
});

gulp.task('serve', function(){
    serve('public');
});