/*
 * Overlay handler
 *
 */

;(function ($) {

    overlay =  function (e) {
        'use strict';

        var $window         = $(window),
            $html           = $('html'),
            $overlay        = $('#overlay'),
            overlayDuration = 300;



        $window.on('overlay', function() {
            if ( $overlay.css('display') == 'none' ) {

                $overlay.css({ 'display': 'block' });
                setTimeout(function() {
                    $html.addClass('overlay-is-active');
                }, 10);

            } else {

                $html.removeClass('overlay-is-active');

                setTimeout(function() {
                    $overlay.css({ 'display': 'none' });
                }, overlayDuration + 10 );
            }
        });
    }

})(jQuery);