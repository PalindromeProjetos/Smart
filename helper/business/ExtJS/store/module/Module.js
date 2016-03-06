//@charset UTF-8
Ext.define( 'iSterilization.store.module.Module', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Module',

    storeId: 'module',

    requires: [
        'iSterilization.model.module.Module'
    ],

    url: 'business/Calls/module.php',

    model: 'iSterilization.model.module.Module'

});