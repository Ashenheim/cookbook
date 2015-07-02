/* ====================================
    Configuration file
==================================== */


var paths = {
    bower : "./bower_components/",
    dest  : "_site/",
    assets: "assets/",
    sass  : "_source/sass/",
    js    : "_source/js/",
    media : "_source/media/"
}


/*
    Task settings
------------------------------------ */

module.exports = {

    /* ------------------------------
        Jekyll
    ------------------------------ */
    Jekyll: {
        src: [
            "*.{html,md,json}",
            "_includes/**",
            "_layouts/**",
            "_posts/**",
            "_data/**",
            "_stories/**",
            "_config.yml", "_config.dev.yml"
        ],
        dest: paths.dest
    },

    /* ------------------------------
        Sass
    ------------------------------ */
    Sass: {
        src: [
            paths.sass + "*.{sass,scss}",
            paths.sass + "**/*.{sass,scss}"
        ],
        dest: {
            one: paths.dest + paths.assets + "css/",
            two: paths.assets + "css/"
        },
        settings: {
            style: 'compressed',
            errLogToConsole: true
        },
        autoprefixer: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ]
    },

    /* ------------------------------
        Javascript
    ------------------------------ */
    Scripts: {
        javascript: {

            src: [
                paths.js + '/modernizr.js',
                paths.bower + '/jquery/dist/jquery.js',
                paths.js + '/vendors/**/*.js',
                paths.js + '/partials/**/*.js',
                paths.js + '/init.js'
            ],
            dest: {
                one: paths.dest + paths.assets + "js/",
                two: paths.assets + "js/"
            }

        },
        uglify: { mangle: false },
        modernizr: {
            src: "*.js",
            dest: paths.js,
            config: {
                "options": [
                    "setClasses",
                    "addTest",
                    "html5printshiv",
                    "testProp",
                    "fnBind"
                ],
                "tests": [
                    "touchevents"
                ],
                "crawl": true
            }
        }
    },

    /* ------------------------------
        Media
    ------------------------------ */
    Media: {
        images: {
            src: paths.media + "*.{jpg,gif,png,svg}"
        },
        svg: {
            src: paths.media + "*.svg"
        },
        dest: [
            paths.dest + paths.assets + "media/",
            paths.assets + "media/"
        ]
    },

    /* ------------------------------
        Clean-up
    ------------------------------ */
    clear: [
        paths.dest,
        paths.assets
    ],

    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browserSync: {
        server: {
            baseDir: paths.dest
        },
        host: "localhost",
        open: false,
        port: 8080,
        online: true,
        notify: {
            styles: [
                'color: rgb(255, 255, 255)',
                'position: fixed',
                'z-index: 999999',
                'bottom: 0px',
                'left: 0px',
                'font-size: 1em',
                'background: rgba(0, 0, 0, 0.8)',
                'font-family: arial, sans-serif',
                'padding: 10px',
                'box-shadow: 0 0 5px rgba(0,0,0,.3)'
            ]
        }
    },
}
