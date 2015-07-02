;(function ($) {

    optionsMenu = function () {
        'use strict';

        var $window = $(window);

        $('.menuTrigger').on('click', function() {
            $('html').toggleClass('menu-is-active');
        });

        $('.overlayTrigger').on('click', function() {
            $('html')
                .toggleClass('overlay-is-active')
                .toggleClass('overlay-is-inactive');
        });

        $('#triggerFontSmall').on('click', function(){
            $('html')
                .addClass('fontsize-is-small')
                .removeClass('fontsize-is-medium')
                .removeClass('fontsize-is-large');
            $window.trigger('fontsizeResize');
        });

        $('#triggerFontMedium').on('click', function(){
            $('html')
                .removeClass('fontsize-is-small')
                .addClass('fontsize-is-medium')
                .removeClass('fontsize-is-large');
            $window.trigger('fontsizeResize');
        });

        $('#triggerFontLarge').on('click', function(){
            $('html')
                .removeClass('fontsize-is-small')
                .removeClass('fontsize-is-medium')
                .addClass('fontsize-is-large');
            $window.trigger('fontsizeResize');
        });

        $('#triggerDarkMode').on('click', function() {
            $('html').toggleClass('dark-mode');
        })

        $('#triggerControls').on('click', function() {
            $('html').toggleClass('controls-is-active');
        });
    }

})(jQuery);