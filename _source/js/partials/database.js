(function($) {

    Cookies = function() {
        'use strict';

        var $container = $('.ingredients');

        var $checkbox = $container.find(':checkbox'),
            _listName = $container.attr('data-list-id'),
            checkboxState,
            storedList,
            checkboxArray = [],
            $name,
            $value,
            createArray,
            checkData,
            storeData,
            init,
            $i;

        createArray = function() {
            checkboxArray = []; // Clears the previous list

            $checkbox.each(function() {
                $name  = $(this).attr('id');
                if ( $(this).is(':checked') ) {
                    $value = true;
                } else {
                    $value = false;
                }

                checkboxArray.push({
                    "name": $name,
                    "value": $value
                });
            });

            // for( var $i=0; $i < checkboxArray.length; $i++ ) {
            //     console.log(checkboxArray[$i]);
            // }
        }

        checkData = function() {
            if( localStorage.getItem( _listName ) ) {
                storedList = JSON.parse( localStorage.getItem( _listName ) );

                for( $i=0; $i < storedList.length; $i++ ) {

                    if(storedList[$i].value) {
                        $( '#' + storedList[$i].name ).prop( 'checked', true );
                    }
                }
            }
        }

        storeData = function(data) {
            localStorage.removeItem( _listName );
            localStorage.setItem( _listName , JSON.stringify(checkboxArray) );
        }

        init = function() {
            checkData();
            createArray();
            storeData(checkboxArray);

            $checkbox.on('change', function() {
                createArray();
                storeData(checkboxArray);
            })
        }

        if($checkbox[0]) {
            init();
        }

    }

}(jQuery));
