const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglifycss = require('gulp-uglifycss');

// scss -> css
function style() {
    // scss file source
    return gulp.src('./style/scss/**/*.scss')
    // pass file to compler
    .pipe(sass().on('error', sass.logError))
    // css place
    .pipe(gulp.dest('./style/css'))
    // all browsers change
    .pipe(browserSync.stream());
}
exports.style = style;

// css -> compress
function compress() {
    // scss file source
    return gulp.src('./style/css/*.css')
    // pass file to compler
    .pipe(uglifycss())
    // css place
    .pipe(gulp.dest('./style/css-compress'))

}
exports.compress = compress;

// to start console write in console 'gulp watch'
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./style/scss/*.scss', style);
    gulp.watch('./style/css/*.css', compress);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.watch = watch;