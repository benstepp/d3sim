var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),

	browserify = require('browserify'),
	browserifyShim = require('browserify-shim'),
	watchify = require('watchify'),
	reactify = require('reactify');

gulp.task('browserify', function() {
	var bundler = browserify({
		entries: ['./src/d3sim.js'],
		transform: [reactify,browserifyShim],
		debug: true,
		cache:{},
		packageCache: {},
		fullpaths:true
	});

	var watcher = watchify(bundler);

	return watcher
		.on('update', function() {
			console.log('updating js');
			watcher.bundle()
				.pipe(source('./src/d3sim.js'))
				.pipe(gulp.dest('./'));
		})
	.bundle()
	.pipe(source('./src/d3sim.js'))
	.pipe(gulp.dest('./'));

});

gulp.start('browserify');
