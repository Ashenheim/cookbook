/* ====================================
 * Smoothstate init
==================================== */

;(function ($) {

    smoothState = function (param) {
        'use strict';


        var $window  = $(window),
            $html    = $('html'),
            $body    = $('body'),
            $overlay = $('#overlay'),
            $page    = $('#Page'),
            overlayTimeout = 0;

        var settings = {
            pauseAnimation: 400,
            pauseBetween: 800
        }

        var smoothState = $page.smoothState({

            prefetch: true,
            pageCacheSize: 10,

            onStart: {
                duration: settings.pauseAnimation,
                render: function (url, $container, $newContent) {

                    $page.addClass('is-exiting');

                    smoothState.restartCSSAnimations();

                    $window.trigger('overlay');
                }
            },

            onProgress: {
                duration: settings.pauseBetween,
                render: function() {
                    $html.addClass('is-loading');
                }
            },

            onReady: {
                duration: 300,
                render: function ($container, $newContent) {

                    // Remove all classes and adds body class.
                    $body
                        .removeClass()
                        .addClass($($newContent[0].outerHTML).attr('data-page-id'));

                    $window.trigger('smoothState');

                    $page.removeClass('is-exiting');
                    $html.removeClass('is-loading');

                    $container.html($newContent);

                    $window.trigger('overlay');
                }
            },

        }).data('smoothState');
    }

})(jQuery);
