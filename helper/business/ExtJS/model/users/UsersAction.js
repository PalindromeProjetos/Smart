//@charset UTF-8
Ext.define( 'iSterilization.model.users.UsersAction', {
    extend: 'Ext.data.Model',

    requires: [
        'Smart.data.identifier.Auto'
    ],

    identifier: 'auto',

    fields: [
        {
            name: 'id',
            type: 'int',
            serializeType: 'auto'
        }, {
            name: 'usersid',
            type: 'int'
        }, {
            name: 'menuactionid',
            type: 'int'
        }, {
            name: 'expireto',
            type: 'auto',
            serializeType: 'date'
        }
    ]

});