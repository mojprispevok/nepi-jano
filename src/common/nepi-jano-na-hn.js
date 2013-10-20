// ==UserScript==
// @name NepiJanoNaHn
// @include http://*.hnonline.sk/*
// @require jquery-2.0.0.min.js
// ==/UserScript==
var $ = window.$.noConflict(true);

/**
 * hnonline.sk
 */
var hn = (function() {
    var init = function() {
        try {
            //check for piano
            var isPiano = ($('#body_inhalt .piano-locked-article-top').length != 0);
            if (isPiano) {
                var feed = false;
                //titulka
                if (/hnonline.sk\/c1/i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/titulka/';
                }
                //ekonomika
                if (/hnonline.sk\/ekonomika\//i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/ekonomika-a-firmy/';
                }
                //slovensko
                if (/hnonline.sk\/slovensko\//i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/slovensko/';
                }
                //svet
                if (/hnonline.sk\/svet\//i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/svet/';
                }
                //nazory
                if (/hnonline.sk\/nazory\//i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/nazory-a-analyzy/';
                }
                //sport
                if (/hnonline.sk\/sport\//i.test(document.location)) {
                    feed = 'https://apiserver.hnonline.sk/content/fallback/xml/list/sport/';
                }
                //get article id from url
                var articleId = false;
                articleId = ((''+document.location).split('-')[1]);
                if (feed && articleId) {
                    allowArticle(articleId, feed);
                }
            }
        } catch(e) {
            console.error('Nepi Jano: error', e);
        }
    };
    var allowArticle = function(articleId, feed) {
        $('#body_inhalt .detail-text').attr('style', '-webkit-transition: all 1s ease-in-out');
        $('#body_inhalt .detail-text').attr('style', '-webkit-filter: blur(8px);');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = handleStateChange;
        xhr.open("GET", feed, true);
        xhr.send();
        function handleStateChange() {
            if (xhr.readyState === 4) {
                try {
                    var xml = $.parseXML(xhr.responseText);
                    var $xml = $(xml)
                    //sollution from 2013.05.16 was fixed by hnonline.sk developers
                    /*
                    var article = $xml.find('article[id="' + articleId + '"] body');
                    console.log(article)
                    //if exists then replace piano content...
                    if (article.length > 0) {
                    $('#body_inhalt .detail-text').html($('<div/>').html(article).text());
                    }
                    */
                    //sollution from 2013.05.19 was fixed by hnonline.sk developers
                    /*$xml.find('article').each(function() {
                        var url = $(this).find('url').text();
                        if (url.split('-')[1] == (''+document.location).split('-')[1]) {
                            $('#body_inhalt .detail-text').html($('<div/>').html($(this).find('body')).text());
                        }
                    });*/
                    //new sollution :)
                    //hint to hnonline.sk developers: use oAuth ;)
                    var titleWeb=$('#body_inhalt h1').text();
                    $xml.find('article').each(function() {
                        var titleXml = $(this).find('title').text();
                        if ($.trim(titleXml)===$.trim(titleWeb)) {
                            $('#body_inhalt .detail-text').html($('<div/>').html($(this).find('body')).text());
                        }
                    })
                } catch(e) {
                    console.error('Nepi Jano: error', e);
                }
                var t = setTimeout(function() {
                    $('#body_inhalt .detail-text').attr('style', '-webkit-filter: blur(0px);');
                }, 500);
            }
        }

    }
    return {
        init : init
    }
})();

hn.init();