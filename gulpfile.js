let gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),

  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  runSequence = require('run-sequence'),
  babel = require('gulp-babel'),//es6 -> 原生
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps');


gulp.task('css', () => {
  gulp.src('./css/*.css')
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./newCss'))
});

gulp.task('jsUglify', () => {
  gulp.src(['./js/donate.js'])
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./min.js'))
})

gulp.task('watch', () => {
  watch('js/donate.js', ['jsUglify']);
  watch('css/*.css', ['css']);
});

gulp.task('writeConfig', () => {
  // 寫你的設定黨啦小廢物
});

gulp.task('default', () => runSequence('writeConfig', ['jsUglify', 'watch']));