var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var importCss = require('postcss-import')
var precss = require('precss')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('css', function () {
  var processors = [
    precss({})
  , importCss()
  , autoprefixer({browsers: ['last 1 version']})
  , cssnano()
  ]
  return gulp.src('styles/index.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .on('error', showError)
    .pipe(gulp.dest('dist/'))
})

function showError(err) {
  console.log(err)
  this.emit('end')
}

gulp.task('watch', function() {
  gulp.watch('styles/index.css', ['css'])
})

