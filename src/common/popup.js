function initBoolean(id, defaultValue, group) {
    var el = $('#' + id);

    var v;
    if (group) {
        v = kango.storage.getItem(group);
        if (v && v.hasOwnProperty(id)) {
            v = v[id];
        } else {
            v = null;
        }
    } else {
        v = kango.storage.getItem(id);
    }
    if (v === null) {
        v = defaultValue;
    }
    el.prop('checked', v);

    $(el).click(function(event) {
        if (group) {
            var cfg = kango.storage.getItem(group);
            if (!cfg || typeof cfg !== 'object') {
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

    var defaultSmeti = {
        smeti: false,
        'smeti-tlacovespravy': true

    };
    initBoolean('smeti', defaultSmeti, 'smeti');

    $("[id^='smeti-']").each(function(index, el) {
        initBoolean(el.id, false, 'smeti');
    });

    $('#popup-close').click(function(event) {
        KangoAPI.closeWindow()
    });
});