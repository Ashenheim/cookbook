(function($) {

    storeChecklist = function() {
        'use strict';

        var $container = $('.ingredients');

        var $checkbox = $container.find(':checkbox'),
            _listName = $container.attr('data-listid'),
            checkboxState,
            storedList,
            checkboxArray = [],
            $name,
            $value,
            createArray,
            checkData,
            storeData,
            init,
            $i,
            fullscreenValue;

        createArray = function() {
            checkboxArray = []; // Clears the previous list
            fullscreenValue = $container.attr('data-fullscreen');

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

            checkboxArray.push({
                "fullscreen": fullscreenValue
            })
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

            // console.log(localStorage.getItem( _listName ));
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

        // Checks if $checkbox excist, then runs init();
        if($checkbox[0]) {
            init();
        }

    }

}(jQuery));
