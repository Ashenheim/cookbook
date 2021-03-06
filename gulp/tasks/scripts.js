/* ====================================
    Scripts
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    plumber      = require('gulp-plumber'),
    jshint       = require('gulp-jshint'),
    browserSync  = require('browser-sync'),
    modernizr    = require('gulp-modernizr'),
    config       = require('../config').Scripts;


/*
    Tasks & Functions
------------------------------------ */

var onError = function (err) {
    var errorMessage =
        '<span style="color: #f10000;">JS error: </span>' + err.message;

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};

gulp.task('modernizr', function() {
    return gulp.src( config.modernizr.src )
        .pipe(modernizr(config.modernizr.config))
        .pipe(gulp.dest( config.modernizr.dest ));
});

gulp.task('scripts', function() {
    browserSync.notify('<span style="color: yellow">Running:</span> Javascript compiling');
    return gulp.src( config.javascript.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(uglify( config.uglify ))
        .pipe(concat('global.js'))
        .pipe(gulp.dest( config.javascript.dest.one ))
        .pipe(gulp.dest( config.javascript.dest.two ))
        .pipe(rename('global.min.js'))
        .pipe(gulp.dest( config.javascript.dest.one ))
        .pipe(gulp.dest( config.javascript.dest.two ))
        .pipe( browserSync.reload({stream:true}) );
});
