//@charset UTF-8
Ext.define( 'iSterilization.store.person.PersonBank', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.PersonBank',

    storeId: 'personbank',

    requires: [
        'iSterilization.model.person.PersonBank'
    ],

    url: 'business/Calls/personbank.php',

    model: 'iSterilization.model.person.PersonBank'

});