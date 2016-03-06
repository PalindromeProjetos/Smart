//@charset UTF-8
Ext.define( 'iSterilization.store.module.Action', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Action',

    storeId: 'action',

    requires: [
        'iSterilization.model.module.Action'
    ],

    url: 'business/Calls/action.php',

    model: 'iSterilization.model.module.Action'

});