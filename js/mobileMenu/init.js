(function($) {
    var triggerBttn = document.getElementById( 'responsive-menu-trigger' ),
        overlay = document.querySelector( 'div.overlay' ),
        closeBttn = overlay.querySelector( 'button.overlay-close'),
        navigationHeader = document.getElementById( 'responsive-header' );

    transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.remove( navigationHeader, 'open' );
            classie.add( overlay, 'close' );
            classie.add( navigationHeader, 'close' );

            ensureMenusAreClosed();
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
                classie.remove( navigationHeader, 'close' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
            classie.add( navigationHeader, 'open' );
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
    if (closeBttn !== null) {
        closeBttn.addEventListener( 'click', toggleOverlay );
    }

    // Menu Expands (jQuery version, by Igor)
    function ensureMenusAreClosed() {
        var firstLevelItems = $('div.overlay nav > ul > li');
        firstLevelItems.removeClass('expanded');
    }

    function initJsExpands() {
        var firstLevelItems = $('div.overlay nav > ul > li'),
            secondLevelItems = $('div.overlay nav > ul > li > ul > li');

        firstLevelItems.each(function() {
            if ($(this).children('ul').length != 0) {
                $(this).addClass('is-expandable');

            }
        });

        // Remove any accidental third level
        secondLevelItems.each(function() {
            $(this).find('ul').remove();
        });

        // Bind the links to expand / collapse
        firstLevelItems.children('a').click(function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('expanded');
        })
    }

    // JS Menu Expands Run
    initJsExpands();
    ensureMenusAreClosed();
})(jQuery);