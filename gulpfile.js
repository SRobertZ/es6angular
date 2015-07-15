
var gulp = require('gulp');
var colors = require('colors');
var runSequence = require('run-sequence');


require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    runSequence('build');
});