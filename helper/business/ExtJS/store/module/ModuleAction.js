//@charset UTF-8
Ext.define( 'iSterilization.store.module.ModuleAction', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.ModuleAction',

    storeId: 'moduleaction',

    requires: [
        'iSterilization.model.module.ModuleAction'
    ],

    url: 'business/Calls/moduleaction.php',

    model: 'iSterilization.model.module.ModuleAction'

});