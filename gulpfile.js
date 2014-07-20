var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', ['compress', 'minify-css', 'copy']);

gulp.task('compress', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('copy', function(){
    return gulp.src([
            'index.html',
            'assets/shirts/**/*.*',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css,',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/ractive/ractive.min.js'
        ], {base: './'})
        .pipe(gulp.dest('dist'));
});