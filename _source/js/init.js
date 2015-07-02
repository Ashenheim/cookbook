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
