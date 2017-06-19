var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-cssvars'),
nested = require('postcss-nested');


gulp.task('default', function(){
  console.log('Hello GULP');
});

gulp.task('html', function(){
  console.log('HTML task ...');
});

gulp.task('css', function(){
  console.log('CSS task ...');
});

gulp.task('watch', function(){
  watch('index.html', function(){
    gulp.start('html');
  });
  watch('css/style.css', function(){
    gulp.start('css');
  });
});
