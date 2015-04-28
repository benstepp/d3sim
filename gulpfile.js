var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rimraf = require('gulp-rimraf'),

	browserify = require('gulp-browserify');

gulp.task('clean', function() {
	gulp.src('build/riftloot/*', {read: false})
		.pipe(rimraf());
});

gulp.task('default',['clean'], function() {
	gulp.src('src/index.js')
		.pipe(browserify({
			entries: ['./index.js'],
			debug: true,
			standalone:'d3sim',
			cache:{},
			packageCache: {},
			fullpaths:false
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./build/'));
});