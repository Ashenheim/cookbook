/* ====================================
    Sass
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    prefix       = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    browserSync  = require('browser-sync'),
    plumber      = require('gulp-plumber'),
    config       = require('../config').Sass;


/*
    Tasks & Functions
------------------------------------ */

var onError = function (err) {
    var errorMessage =
        '<span style="color: #f10000;">Sass error: </span>' + err.message +
        '<span style="display: block; color: #ccc; font-size: 80%;"> on line: <span style="color: #fff;">' +
            err.lineNumber +
        '</span></span>' +
        '<span style="display: block; color: #ccc; font-size: 80%;"> in file: <span style="color: #fff;">' + err.fileName + '</span></span>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};

gulp.task('styles', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Sass compiling');
    return gulp.src( config.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass( config.settings )) 
        .pipe(prefix( config.autoprefixer ))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/'}))
        .pipe(gulp.dest( config.dest.one ))
        .pipe(gulp.dest( config.dest.two ))
        .pipe(plumber.stop())
        .pipe(browserSync.reload({stream:true}));
});
