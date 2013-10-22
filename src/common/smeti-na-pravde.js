// ==UserScript==
// @name SmetiNaPravde
// @include http://*.pravda.sk/*
// @require jquery-2.0.0.min.js
// ==/UserScript==

var $ = window.$.noConflict(true);

var patterns = {
    "vzdy": [ /bit\.ly/i, /sme\.sk\/dok/i, /sme\.sk\/mapa-stranky/i, /sme\.sk\/kodex/i ],
    "smeti-sport": [ /sport\.pravda\.sk/i, /futbal\.pravda\.sk/i, /hokej\.pravda\.sk/i ],
    "smeti-kultura": [ /kultura\.pravda\.sk/i ],
    "smeti-krimi": [ /\/cierna-kronika\//i ],
    "smeti-zena": [ /zena\.pravda\.sk/i, /koktail\.pravda\.sk/i ],
    "smeti-tech": [ /vat\.pravda\.sk/i ],
    "smeti-auto": [ /auto\.pravda\.sk/i ],
    "smeti-komentare": [ /zurnal\.pravda\.sk/i, /nazory\.pravda\.sk/i ],
//    "smeti-tv": [ /tv\.sme\.sk/i ],
//    "smeti-tlacovespravy": [ /tlacovespravy\.sme\.sk/i ],
    "smeti-blogy": [ /\.blog\.pravda\.sk/i ]

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
