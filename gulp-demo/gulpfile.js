/**
 * Created by gaoletian on 15/10/18.
 */
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src(['./src/lib/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        //.pipe(uglify())
        //.pipe(concat('all.min.js'))
        .pipe(gulp.dest('./build/lib'));

    gulp.src(['./src/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./build'));
});