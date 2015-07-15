/**
 * Created by rsabiryanov on 18.03.2015.
 */
var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var config = require('./configurationManager').get();

var destPathName = config.destPathName;
/**
 * Инжектирование скриптов bower в index.html
 */
gulp.task('injectBower',function () {
 return	gulp.src(destPathName + '/index.html')
		.pipe(inject(gulp.src(bowerFiles({
				bowerDirectory: destPathName,
				bowerJson: './bower.json'
			}), {
				read: false
			}
		), {
			ignorePath: 'src/app',
			name: 'bower'
		}))
	 .pipe(gulp.dest(destPathName + ''));
});



