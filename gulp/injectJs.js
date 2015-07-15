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

	var commonBase = [destPathName + '/common/common.base.min.js'];
	commonBase.injectPlaceholder = 'commonBase';

	var commonTemplates = [destPathName + '/common/common.templates.js'];
	commonTemplates.injectPlaceholder = 'commonTemplates';

	var mainTemplates = [destPathName + '/js/main.templates.js'];
	mainTemplates.injectPlaceholder = 'mainTemplates';

	var bundle = [destPathName + '/js/bundle.js'];
	bundle.injectPlaceholder = 'bundle';

	var html5Support=[destPathName + '/common/html5.support.min.js'];
	html5Support.injectPlaceholder = 'html5Support';	
	
	return gulp.src(destPathName + '/index.html')
		.pipe(inject(gulp.src(commonBase), {
				read: false,
				ignorePath: 'dist',
				name: commonBase.injectPlaceholder
			}
		))
		.pipe(inject(gulp.src(commonTemplates), {
				read: false,
				ignorePath: 'dist',
				name: commonTemplates.injectPlaceholder
			}
		))
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
		.pipe(inject(gulp.src(html5Support), {
				read: false,
				ignorePath: 'dist',
				name: html5Support.injectPlaceholder
			}
		))		
		.pipe(gulp.dest(destPathName));

});
