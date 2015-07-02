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

    overlay();
    optionsMenu();
    // smoothState();

    var $slider = $('.home-block__container').flickity({
        // options
        cellAlign: 'left',
        cellSelector: '.home-block',
        pageDots: false,
        prevNextButtons: false,
        contain: true
    });

    $slider.flickity();


    /* ------------------------------
        Events
    ------------------------------ */

    $window.on('load', function(e) {
        console.log( "Page loaded" );
        setTimeout(function() {
            $window.trigger('overlay');
        }, 600);
    });

});
