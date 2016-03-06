//@charset UTF-8
Ext.define( 'iSterilization.store.enums.Enumtype', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Enumtype',

    storeId: 'enumtype',

    requires: [
        'iSterilization.model.enums.Enumtype'
    ],

    url: 'business/Calls/enumtype.php',

    model: 'iSterilization.model.enums.Enumtype'

});