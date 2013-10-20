// ==UserScript==
// @name NepiJanoNaEtrend
// @include http://*.etrend.sk/*
// @require jquery-2.0.0.min.js
// ==/UserScript==
var $ = window.$.noConflict(true);

/**
 * etrend.sk
 */
var etrend = (function() {
    var init = function() {
        try {
            //check for piano
            var isPiano = ($('#article_detail .piano-box').length != 0);
            var isPaid = ($('#article_detail .active_box .boxes').length != 0);
            if (isPiano || isPaid) {
                var articleId = false;
                articleId = $($('#article_detail .title div')[0]).text();
                if (articleId) {
                    allowArticle(articleId);
                }

            }
        } catch(e) {
            console.error('Nepi Jano: error', e);
        }
    };
    var allowArticle = function(articleId) {
        function createUUID() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 40; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            var uuid = s.join("");
            return uuid;
        }


        $('#article_text').attr('style', '-webkit-transition: all 1s ease-in-out');
        $('#article_text').attr('style', '-webkit-filter: blur(8px);');
        var url = 'http://www.etrend.sk/services/IphoneAppDict.html?deviceType=1&device=' + createUUID() + '&quality=hi&queryType=articleDetail&uid=' + articleId;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = handleStateChange;
        xhr.open("GET", url, true);
        xhr.send();
        function handleStateChange() {
            if (xhr.readyState === 4) {
                try {
                    var xml = $.parseXML(xhr.responseText);
                    var $xml = $(xml)
                    var article = $xml.find('string');
                    //if exists then replace piano content...
                    if (article.length > 0) {
                        $('#article_text').html($('<div/>').html(article).text());
                    }
                } catch(e) {
                    console.error('Nepi Jano: error', e);
                }
                var t = setTimeout(function() {
                    $('#article_text').attr('style', '-webkit-filter: blur(0px);');
                }, 500);
            }
        }

    }
    return {
        init : init
    }
})();

etrend.init();