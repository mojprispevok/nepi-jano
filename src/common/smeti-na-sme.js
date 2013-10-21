// ==UserScript==
// @name SmetiNaSme
// @include http://*.sme.sk/*
// @require jquery-2.0.0.min.js
// ==/UserScript==

var $ = window.$.noConflict(true);

kango.invokeAsync('kango.storage.getItem', 'smeti', function(enabled) {
    if (enabled) {
        $('a').each(function(index, el) {
//    if (/s.sme.sk\//i.test(url) && cId) {
//
//    }


            kango.console.log(el.href);
        });
    }
});
