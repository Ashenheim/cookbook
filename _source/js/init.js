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
        contain: true,
        wrapAround: true
    });

    $slider.flickity();

    storeChecklist();

    /* ------------------------------
        Events
    ------------------------------ */

    $('.ingredients__trigger').on('click', function(event) {
        event.preventDefault();
        $html.toggleClass('is-fixed list-is-fullscreen');
    });

    $window.on('load', function(e) {
        setTimeout(function() {
            $window.trigger('overlay');
        }, 10);
    });

});
