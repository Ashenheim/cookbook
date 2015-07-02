/* ====================================
    Bundled tasks
    -----

    Here are the tasks that compile
    together. Uses runSequence to
    let certain tasks run first before
    another can start.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    runSequence  = require('run-sequence'),
    config       = require('../config').fonts;


/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('build', function() {
    runSequence(
        'modernizr',
        [ 'scripts', 'styles', 'media' ],
        ['jekyll-dev']
    )
});

// gulp server
gulp.task('serve', ['browserSync', 'watch']);

// gulp serve
gulp.task('default', function() {
    runSequence(
        'build',
        'serve'
    )
});
