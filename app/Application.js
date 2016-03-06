//@charset UTF-8
Ext.define( 'Smart.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Smart',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
    },

    init: function () {
        var me = this;
        me.initQuickTips();
        Ext.USE_NATIVE_JSON = true;
        Ext.setGlyphFontFamily('fontello');
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Atualizar Modulo', 'Este modulo possui atualização, carregar?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});
