function smothReplaceCSS() {
    oldCSS = $('link[href*="primo_library_wro"]');
    newCSS = oldCSS.clone();
    newCSS.attr("href", "http://nextbase.github.io/primo-orange/css/main.css");
    newCSS.insertAfter(oldCSS);
    setTimeout(function() {
        console.log("JS: Replaced Primo Default CSS with the UNIST Theme Stylesheet");
        oldCSS.remove();
    }, 800);
}

$(document).ready(function() {
    $("#sitemap-button").click(function() {
        $("#footer").toggleClass("sitemap-expanded");
    });
});