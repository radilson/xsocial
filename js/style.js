(function() {

    var bodyEl = document.body,
        content = document.querySelector( '.wrapper' ),
        btnfm = document.getElementById( 'open-button' ),
        btnsb = document.querySelector( '.sidebar-toggle' ),
        closebtn = document.getElementById( 'close-button' ),
        isFmOpen = false;
        isSbOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        btnfm.addEventListener( 'click', toggleFmMenu );
        if( closebtn ) {
            closebtn.addEventListener( 'click', toggleFmMenu );
        }

        btnsb.addEventListener( 'click', toggleSbMenu );


        // close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener( 'click', function(ev) {
            var target = ev.target;
            if( isFmOpen && target !== btnfm ) {
                toggleFmMenu();
            }
        } );

        // close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener( 'click', function(ev) {
            var target = ev.target;
            if( isSbOpen && target !== btnsb ) {
                toggleSbMenu();
            }
        } );
    }

    function toggleFmMenu() {
        if( isFmOpen ) {
            classie.remove( bodyEl, 'show-menu' );
        }
        else {
            classie.add( bodyEl, 'show-menu' );
        }
        isFmOpen = !isFmOpen;
    }

    function toggleSbMenu() {
        if( isSbOpen ) {
            classie.remove( content, 'active' );
        }
        else {
            classie.add( content, 'active' );
        }
        isSbOpen = !isSbOpen;
    }

    init();

})();