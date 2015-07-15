/**
 * Created by RobertSabiryanov on 22.06.15.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var gIf = require('gulp-if');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require("babelify");
var assign = require('lodash.assign');

function bundle(option) {
	var customOpts = {
		debug: option.debug,
		entries: option.entryPoint,
		ignoreWatch: ['**/node_modules/**', '**/bower_components/**', '**/bower_modules/**'],
		poll: true
	};
	var opts = assign({}, watchify.args, customOpts);

	var bfy = browserify(opts);
	if (option.watch) {
		bfy = watchify(browserify(opts));

		console.log("Watching ES6 modules".yellow);
		bfy.on('update', function (ids) {
			var logText = ('Watchify. Updated files ' + ids).yellow;
			gutil.log(logText);
			return processBundle(bfy, option);
		}).on('time', function (time) {
			gutil.log(('Rebuilded time:' + time).green);
		});
	}
	bfy.transform(babelify.configure({
		ignore: ['**/node_modules/**', '**/bower_components/**', '**/bower_modules/**']
	}));

	return processBundle(bfy, option);
}

function processBundle(bfy, option) {
	return bfy.on('error', error)
		.bundle()
		.on('error', error)
		.pipe(source(option.bundleName))
		.pipe(buffer())
		.pipe(gIf(option.map, sourcemaps.init({loadMaps: true, addComment: false})))
		.pipe(gIf(option.minify, uglify(option.bundleNameMin, {
			outSourceMap: option.map
		})))
		.pipe(gIf(option.map, sourcemaps.write('./')))
		.pipe(gulp.dest(option.destPathName));
}

function error(a){
	gutil.log('Bundle ES6 error'.red, a.toString().red);
}

module.exports = bundle;
