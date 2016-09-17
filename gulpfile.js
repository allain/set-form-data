var gulp = require('gulp'),
    tap = require('gulp-tap'),
    rename = require('gulp-rename'),
    browserify = require('browserify');

var bundler = function (file) {
    var opts = {
        entries: [file.path],
        paths: ['./node_modules', './src'],
        debug: true
    }

    file.contents = browserify(opts)
        .transform("babelify", {presets: ["es2015"], plugins: ["syntax-jsx", "transform-h-jsx"]})
        .bundle();
}

gulp.task('example', function () {
    return gulp.src('example/app.js', {read: false})
        .pipe(tap(bundler))
        .pipe(rename('app.bundle.js'))
        .pipe(gulp.dest('example'));
});

gulp.task('default', ['example']);
