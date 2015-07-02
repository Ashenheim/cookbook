;(function ($) {

    progressbar = function () {
        'use strict';

        var $element     = $('#progressBar'),
            $window      = $(window),
            $body        = $('body'),
            windowScroll = $window.scrollTop(),
            windowHeight = $window.height(),
            siteHeight   = $('#Page').height(),
            calculation  = null,

            loadTimeout;

        var _calculator = function() {
            calculation = (windowScroll / (siteHeight - windowHeight)) * 100;
        }

        _calculator();

        var _updateValues = function () {
            siteHeight   = $('#Page').height();
            windowHeight = $window.height();
        }

        var _scrollHander = function (e) {
            windowScroll = $window.scrollTop();

            _calculator();

            $element.css({
                'width': calculation + '%'
            });

            if ( windowScroll > 0 ) { $('html').addClass('bar-is-visible'); }
            else { $('html').removeClass('bar-is-visible'); }
        }

        var _loadHandler = function() {
            _updateValues();
            _scrollHander();
        }

        $window.on('load resize fontsizeResize smoothState', function() {
            if ( loadTimeout ) {
                clearTimeout(loadTimeout);
                loadTimeout = null
            }

            loadTimeout = setTimeout(_loadHandler, 250);
        });

        $window.on('scroll', function() {
            _scrollHander();
        });
    }

})(jQuery);
