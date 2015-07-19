/**
 * Created by RobertSabiryanov on 13.07.15.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var bowerFiles = require('main-bower-files');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('./configurationManager').get();
var del = require('del');


/** Config variables **/
var path = require('path'),
    destPathName = config.destPathName,
    destDir = './' + destPathName,
    appDir = config.appDir,
    bowerDir = appDir + '/bower_components';

gulp.task('clean', del.bind(null, [destDir], {force: true}));

gulp.task('img', function () {
    return gulp.src([appDir + '/img/**/*.*'])
        .pipe(gulp.dest(destDir + '/img/'))
});
gulp.task('stylus', function () {
    return gulp.src([appDir + '/stylus/*.styl'])
        .pipe(sourcemaps.init())
        .pipe(stylus({use: nib()}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destDir + '/css'));
});
gulp.task('html', function () {
    return gulp.src([appDir + '/index.html'])
        .pipe(gulp.dest(destDir))
});

gulp.task('templateCache', function () {
    return gulp.src(appDir + '/js/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'main.templates'
        }))
        .pipe(gulp.dest(destDir + '/js'));
});

gulp.task('build-es6', function () {
    config.entryPoint = appDir + '/js/app.js';
    config.bundleName = 'bundle.js';
    config.bundleNameMin = 'bundle.min.js';
    config.destPathName = destPathName + '/js';
    return bundler(config);
});

var bundler = require('./es6bundler');

gulp.task('build', function (cb) {
    runSequence(['img', 'stylus', 'html', 'templateCache', 'build-es6'], 'injects', cb);
});
