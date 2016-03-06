//@charset UTF-8
Ext.define( 'iSterilization.store.person.Person', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Person',

    storeId: 'person',

    requires: [
        'iSterilization.model.person.Person'
    ],

    url: 'business/Calls/person.php',

    model: 'iSterilization.model.person.Person'

});