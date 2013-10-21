// ==UserScript==
// @name SmetiNaSme
// @include http://*.sme.sk/*
// @require jquery-2.0.0.min.js
// ==/UserScript==

var $ = window.$.noConflict(true);

var patterns = {
    "vzdy": [ /bit\.ly/i, /sme\.sk\/dok/i, /sme\.sk\/mapa-stranky/i, /sme\.sk\/kodex/i ],
    "smeti-sport": [ /sport\.sme\.sk/i, /sport\.html/i ],
    "smeti-kultura": [ /kultura\.sme\.sk/i, /kultura\.html/i ],
    "smeti-krimi": [ /krimi\.sme\.sk/i, /krimi\.html/i ],
    "smeti-zena": [ /zena\.sme\.sk/i, /zena\.html/i ],
    "smeti-tech": [ /tech\.sme\.sk/i ],
    "smeti-auto": [ /auto\.sme\.sk/i ],
    "smeti-komentare": [ /komentare\.sme\.sk/i ],
    "smeti-tv": [ /tv\.sme\.sk/i ],
    "smeti-tlacovespravy": [ /tlacovespravy\.sme\.sk/i ],
    "smeti-blogy": [ /\.blog\.sme\.sk/i ]

};

kango.invokeAsync('kango.storage.getItem', 'smeti', function(cfg) {
    var jeNaVyhodenie = function(href) {
        for (var key in patterns) {
            if (key==='vzdy' || cfg[key]) {
                var tests = patterns[key];
                var mi = tests.length;
                for (var i = 0; i < mi; i++) {
                    if (tests[i].test(href)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    if (cfg.smeti) {
        $('a').each(function(index, el) {
            if (jeNaVyhodenie(el.href)) {
                $(el).fadeTo(0, 0.2);
            }
        });
    }
});
