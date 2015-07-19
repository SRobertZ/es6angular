/**
 * Created by rsabiryanov on 18.03.2015.
 */
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('./configurationManager').get();
var destPathName = config.destPathName;


gulp.task('injectCss', function () {
	return gulp.src(destPathName + '/index.html')
		.pipe(inject(gulp.src(destPathName + '/css/*.css'), {
			name: 'customCss',
			ignorePath: 'dist',
			loadCss: true
		}))
		.pipe(inject(gulp.src(destPathName + '/bower_components/bootstrap/dist/css/bootstrap.css'), {
			name: 'bower',
			ignorePath: 'dist',
			loadCss: true
		}))
		.pipe(gulp.dest(destPathName));
});


