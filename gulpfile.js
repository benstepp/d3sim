var gulp = require('gulp');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('gulp-rimraf');
var browserify = require('gulp-browserify');

gulp.task('clean', function() {
	gulp.src('build/*', {read: false})
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