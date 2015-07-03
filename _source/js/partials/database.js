(function($) {

    Cookies = function() {
        'use strict';

        var $checkBox = $('.ingredients input');

        console.log("Create cookies!");

        $checkBox.each(function() {
            var mycookie = $.cookie($(this).attr('id'));
            if (mycookie && mycookie == "true") {
                $(this).prop('checked', mycookie);
            }

            console.log(mycookie);
        });
        $checkBox.change(function() {
            $.cookie($(this).attr("id"), $(this).prop('checked'), {
                path: '/',
                expires: 365
            });
        });
    }

}(jQuery));
