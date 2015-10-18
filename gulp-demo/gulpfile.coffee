gulp = require 'gulp'

gulp.task 'coffee-2-js', ->
  gulp.src './src/*.coffee'
  .pipe coffee({bare: true}).on('error', gutil.log)
  .pipe(gulp.dest('./build/'))
