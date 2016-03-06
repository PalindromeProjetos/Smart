//@charset UTF-8
Ext.define( 'iSterilization.store.enums.EnumTypeList', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.EnumTypeList',

    storeId: 'enumtypelist',

    requires: [
        'iSterilization.model.enums.EnumTypeList'
    ],

    url: 'business/Calls/enumtypelist.php',

    model: 'iSterilization.model.enums.EnumTypeList'

});