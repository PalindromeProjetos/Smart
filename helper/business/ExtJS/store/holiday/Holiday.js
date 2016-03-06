//@charset UTF-8
Ext.define( 'iSterilization.store.holiday.Holiday', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Holiday',

    storeId: 'holiday',

    requires: [
        'iSterilization.model.holiday.Holiday'
    ],

    url: 'business/Calls/holiday.php',

    model: 'iSterilization.model.holiday.Holiday'

});