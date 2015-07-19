/**
 * Created by rsabiryanov on 18.03.2015.
 */
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('./configurationManager').get();
var destPathName = config.destPathName;
var gIf = require('gulp-if');


/**
 * Определение порядка загрузки js файлов
 */

gulp.task('injectJs', function () {

	var mainTemplates = [destPathName + '/js/templates.js'];
	mainTemplates.injectPlaceholder = 'templates';

	var bundle = [destPathName + '/js/bundle.js'];
	bundle.injectPlaceholder = 'bundle';

	return gulp.src(destPathName + '/index.html')
		.pipe(inject(gulp.src(mainTemplates), {
				read: false,
				ignorePath: 'dist',
				name: mainTemplates.injectPlaceholder
			}
		))
		.pipe(inject(gulp.src(bundle), {
				read: false,
				ignorePath: 'dist',
				name: bundle.injectPlaceholder
			}
		))
		.pipe(gulp.dest(destPathName));

});
