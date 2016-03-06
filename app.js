//@charset UTF-8
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Smart.ux': 'library/ux',
        'Smart.app': 'library/app',
        'Smart.plugins': 'library/plugins',
        'Smart.util': 'library/util',
        'Smart.data': 'library/data',
        'Smart.data.field': 'library/data/field',
        'Smart.form': 'library/form',
        'Smart.form.field': 'library/form/field'
    }
});

Ext.application({
    extend: 'Smart.Application',

    name: 'Smart',

    requires: [
        'Smart.view.main.Main'
    ],

    mainView: 'Smart.view.main.Main'

});