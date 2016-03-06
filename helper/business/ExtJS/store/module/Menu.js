//@charset UTF-8
Ext.define( 'iSterilization.store.module.Menu', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Menu',

    storeId: 'menu',

    requires: [
        'iSterilization.model.module.Menu'
    ],

    url: 'business/Calls/menu.php',

    model: 'iSterilization.model.module.Menu'

});