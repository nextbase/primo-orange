// Use Primo Method to Check if this is a mobile device
window.onload = function() {
    try {
        (function(a) {
            (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
        })(navigator.userAgent || navigator.vendor || window.opera);
        if (($(window).width() <= 500 && jQuery.browser.mobile) || ('true' == getRequestParameterByName('debug_mobile'))) {
            $('body').addClass('mobile-device');
        }
    } catch (mobileErr) {
        log('JS changes for mobile failed:' + mobileErr);
    }
}

// .exists function for jQuery
$.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);
    if (this.length) {
        callback.call(this, args);
    }
    return this;
};

$.fn.isMissing = function(callback) {
    var args = [].slice.call(arguments, 1);
    if (!this.length) {
        callback.call(this, args);
    }
    return this;
};

function updateLoginButton() {
    responsiveLoginButton = $('#responsive-login-trigger');
    loginButton = $('#exlidSignIn a');
    logoutButton = $('#exlidMyAccount a');
    logoutText = logoutButton.html();

    if ($('#exlidSignOut').hasClass('EXLHidden')) {
        responsiveLoginButton.attr('href', loginButton.attr('href'));
        responsiveLoginButton.attr('onclick', loginButton.attr('onclick'));
    } else {
        responsiveLoginButton.attr('href', logoutButton.attr('href'));
        responsiveLoginButton.attr('onclick', logoutButton.attr('onclick'));
        responsiveLoginButton.attr('id', "responsive-logout-trigger");
        responsiveLoginButton.html(logoutButton.html());
    }
}

function expandableMobileFacet(trigger_query, parent_query) {
    $(trigger_query).bind('click', function(e) {
        $(this).closest(parent_query).toggleClass('expanded-for-mobile');
        e.preventDefault();
    });
};

function accountLinks() {
    menuEntity = $('#exlidUserAreaRibbon').clone();
    menuEntity.attr('id', "exlidUserAreaRibbonResponsive");
    menuEntity.find('li').each(function(index) {
        $(this).attr('id', $(this).attr('id') + 'Responsive');
    });
    menuList = $("#responsive-menu-overlay .menu-block-wrapper");
    menuList.append(menuEntity);
}

function initFilterExpand() {
    $("#exlidFacetTile").exists(function() {
        $(this).prepend('<div class="filters-expand-title"><h2 class="filters-title">Search Filters</h2></div>');
        expandableMobileFacet($(this).find(".filters-expand-title"), $(this));
    });
}

$(document).ready(function() {
    // Responsive Search Filters
    initFilterExpand();

    // Pick the right login / logout button
    updateLoginButton();

    // Responsive Menu
    var triggerBttn = $('#responsive-menu-trigger'),
        overlay = $('#responsive-menu-overlay'),
        closeBttn = overlay.find('button.overlay-close'),
        navigationHeader = $('#responsive-header');

    function toggleOverlay() {
        if (overlay.hasClass('open')) {
            overlay.removeClass('open');
            navigationHeader.removeClass('open');
            ensureMenusAreClosed();
        } else if (navigationHeader.hasClass('open')) {
            overlay.removeClass('open');
            navigationHeader.removeClass('open');
            ensureMenusAreClosed();
        } else {
            overlay.addClass('open');
            navigationHeader.addClass('open');
        }
    }

    triggerBttn.click(function() {
        toggleOverlay();
    });

    closeBttn.click(function() {
        toggleOverlay();
    });

    // Account Buttons
    accountLinks();

    // Menu Expands
    function ensureMenusAreClosed() {
        var firstLevelItems = $('#responsive-menu-overlay nav > ul > li, #responsive-menu-overlay nav > div > ul > li');
        firstLevelItems.removeClass('expanded');
    }

    function initJsExpands() {
        var firstLevelItems = $('#responsive-menu-overlay nav > ul > li, #responsive-menu-overlay nav > div > ul > li'),
            secondLevelItems = $('#responsive-menu-overlay nav > ul > li > ul > li');

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

    // Responsive Search Behavior
    $("#goButtonResponsive").click(function() {
        var text = $("#search_field_responsive").val();
        if (text == "") {
            alert('Enter Search Keyword.');
            return;
        }

        $body = $("body");
        $body.addClass("loading");
        window.location.href = "http://library.unist.ac.kr/search_primo/all/" + text;
    });

    $("#search_field_responsive").keydown(function(event) {
        if (event.which == 13 && $("#search_field").val() != "") {
            event.preventDefault();
            $("#goButtonResponsive").trigger("click");
        } else if (event.which == 13 && $("#search_field_responsive").val() == "") {
            alert('Enter Search Keyword.');
        }
    });
});