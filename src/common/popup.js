function initBoolean(id, defaultValue) {
    var el = $('#' + id);

    var v = kango.storage.getItem(id);
//    console.log(v);
    if (v === null) {
        v = defaultValue;
    }
    el.prop('checked', v);

    $(el).click(function(event) {
//        console.log($(this).is(':checked'));
        kango.storage.setItem(id, $(this).is(':checked'));
    });
}

KangoAPI.onReady(function() {


    initBoolean('nepi-jano', true);
    initBoolean('nepi-jano-toolbar', false);

    initBoolean('smeti', false);
    initBoolean('smeti-sport', true);

    $('#popup-close').click(function(event) {
        KangoAPI.closeWindow()
    });
});