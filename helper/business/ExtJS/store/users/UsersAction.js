//@charset UTF-8
Ext.define( 'iSterilization.store.users.UsersAction', {
    extend: 'Smart.data.StoreBase',

    alias: 'store.UsersAction',

    storeId: 'usersaction',

    requires: [
        'iSterilization.model.users.UsersAction'
    ],

    url: 'business/Calls/usersaction.php',

    model: 'iSterilization.model.users.UsersAction'

});