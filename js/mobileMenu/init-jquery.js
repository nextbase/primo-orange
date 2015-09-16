(function($) {
    var triggerBttn = $('#responsive-menu-trigger'),
        overlay = $('div.overlay'),
        closeBttn = overlay.find( 'button.overlay-close'),
        navigationHeader = $( '#responsive-header'),
        transEndEventName = "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend";

    function toggleOverlay() {
        if( overlay.hasClass('open') ) {
            overlay.removeClass('open');
            navigationHeader.removeClass('open');
            ensureMenusAreClosed();
        }
        else {
            overlay.addClass( 'open' );
            navigationHeader.addClass( 'open' );
        }
    }

    triggerBttn.click( function() {
        toggleOverlay();
    });

    closeBttn.click( function() {
        toggleOverlay();
    });

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