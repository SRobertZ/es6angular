/**
 * Created by RobertSabiryanov on 13.07.15.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var bowerFiles = require('main-bower-files');
var nib = require('nib');
var sourcemaps= require('gulp-sourcemaps');
var stylus= require('gulp-stylus');
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');


/** Config variables **/
var path = require('path'),
    tmpDir = './.tmp',
    destPathName = 'dist',
    destDir = './' + destPathName,
    appDir = './app',
    bowerDir = appDir + '/bower_components';
expressSrc = path.join(__dirname, destDir),
    port = 9009,
    lrPort = 4009,

    gulp.task('clean', require('del').bind(null, [tmpDir, destDir]));

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
    return gulp.src(appDir+'/js/**/*.html')
        .pipe(templateCache('main.templates.js', {
            module: 'main.templates'
        }))
        .pipe(gulp.dest(destDir+'/js'));
});

gulp.task('build-es6',['modules-configs'], function () {
    config.entryPoint= appDir + '/js/main.js';
    config.bundleName= 'bundle.js';
    config.bundleNameMin= 'bundle.min.js';
    config.destPathName= destPathName+'/js';
    return bundler(config);
});

var bundler= require('./es6bundler');

gulp.task('build', function (cb) {
    runSequence( ['img', 'stylus', 'html','templateCache','build-es6'], 'inject', 'rev', 'afterBuild', cb);
});
