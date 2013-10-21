function initBoolean(id, defaultValue, group) {
    var el = $('#' + id);

    var v;
    if (group) {
        v = kango.storage.getItem(group);
        v = v[id];
    } else {
        v = kango.storage.getItem(id);
    }
//    console.log(v);
    if (v === null) {
        v = defaultValue;
    }
    el.prop('checked', v);

    $(el).click(function(event) {
//        console.log($(this).is(':checked'));
        if (group) {
            var cfg = kango.storage.getItem(group);
            if (typeof cfg !== 'object') {
                cfg = {};
            }
            cfg[id] = $(this).is(':checked');
            kango.storage.setItem(group, cfg);
        } else {
            kango.storage.setItem(id, $(this).is(':checked'));
        }
    });
}

KangoAPI.onReady(function() {


    initBoolean('nepi-jano', true);
    initBoolean('nepi-jano-toolbar', false);

    initBoolean('smeti', false, 'smeti');
    initBoolean('smeti-sport', true, 'smeti');

    $('#popup-close').click(function(event) {
        KangoAPI.closeWindow()
    });
});