//@charset UTF-8
Ext.define( 'iSterilization.store.person.PersonPhone', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.PersonPhone',

    storeId: 'personphone',

    requires: [
        'iSterilization.model.person.PersonPhone'
    ],

    url: 'business/Calls/personphone.php',

    model: 'iSterilization.model.person.PersonPhone'

});