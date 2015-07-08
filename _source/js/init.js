;(function ($) {
    fullscreenToggle = function(param) {
        'use strict';

        var $html = $('html');
        var $element = $('.ingredients');

        $element.find('.ingredients__trigger').on('click', function(event) {
            event.preventDefault();
            $html.toggleClass('is-fixed list-is-fullscreen');

            console.log( $element.attr('data-fullscreen') );

            if ( $element.attr('data-fullscreen') == "false" ) {
                $element.attr('data-fullscreen', true);
            } else {
                $element.attr('data-fullscreen', false);
            }
        });
    }
}(jQuery));

$("html").removeClass('no-js').addClass('js');

$(document).ready(function() {

    var $window         = $(window),
        $html           = $('html'),
        $body           = $('body'),
        scrollTimeout   = null,
        resizeTimeout   = null;

    /* ------------------------------
        Initiations
    ------------------------------ */

    var $slider = $('.home-block__container').flickity({
        // options
        cellAlign: 'left',
        cellSelector: '.home-block',
        pageDots: false,
        prevNextButtons: false,
        contain: true,
        wrapAround: true
    });

    $slider.flickity();

    storeChecklist();
    fullscreenToggle();

    /* ------------------------------
        Events
    ------------------------------ */

});
