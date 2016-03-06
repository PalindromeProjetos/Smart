//@charset UTF-8
Ext.define( 'iSterilization.store.module.ModuleMenu', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.ModuleMenu',

    storeId: 'modulemenu',

    requires: [
        'iSterilization.model.module.ModuleMenu'
    ],

    url: 'business/Calls/modulemenu.php',

    model: 'iSterilization.model.module.ModuleMenu'

});