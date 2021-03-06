function smoothReplaceCSS() {
    oldCSS = $('link[href*="primo_library_wro"]');
    newCSS = oldCSS.clone();
    newCSS.attr("href", "http://nextbase.github.io/primo-orange/css/main.css");
    newCSS.insertAfter(oldCSS);
    setTimeout(function() {
        console.log("JS: Replaced Primo Default CSS with the UNIST Theme Stylesheet");
        oldCSS.remove();
    }, 800);
}

function oldStyles() {
    oldCSS = $('link[href*="http://nextbase.github.io/primo-orange/css/main.css"]');
    newCSS = oldCSS.clone();
    newCSS.attr("href", "../wro/primo_library_wro_82UNIST_en_US.css");
    newCSS.insertAfter(oldCSS);
    setTimeout(function() {
        console.log("JS: Replaced back the primo default!");
        oldCSS.remove();
    }, 800);
}

$(document).ready(function() {
    // Let's replace the CSS with the one we want
    smoothReplaceCSS();
});