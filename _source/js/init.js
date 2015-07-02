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
    smoothState();

    $('.home-block__container').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        cellSelector: '.home-block'
    });

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
