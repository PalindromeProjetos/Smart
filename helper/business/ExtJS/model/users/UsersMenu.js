//@charset UTF-8
Ext.define( 'iSterilization.model.users.UsersMenu', {
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
            name: 'modulemenuid',
            type: 'int'
        }, {
            name: 'expireto',
            type: 'auto',
            serializeType: 'date'
        }
    ]

});