var gulp = require('gulp');
var serve = require('gulp-serve');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 0.01%', 'IE 10']
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('serve', function(){
    serve('public');
});