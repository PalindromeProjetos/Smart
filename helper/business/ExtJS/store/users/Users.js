//@charset UTF-8
Ext.define( 'iSterilization.store.users.Users', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.Users',

    storeId: 'users',

    requires: [
        'iSterilization.model.users.Users'
    ],

    url: 'business/Calls/users.php',

    model: 'iSterilization.model.users.Users'

});