//@charset UTF-8
Ext.define( 'iSterilization.model.users.Users', {
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
            name: 'username',
            type: 'auto'
        }, {
            name: 'password',
            type: 'auto'
        }, {
            name: 'filedata',
            type: 'auto'
        }, {
            name: 'fileinfo',
            type: 'auto'
        }, {
            name: 'isactive',
            type: 'auto'
        }, {
            name: 'fullname',
            type: 'auto'
        }, {
            name: 'mainmail',
            type: 'auto'
        }, {
            name: 'birthdate',
            type: 'auto',
            serializeType: 'date'
        }, {
            name: 'notifyuser',
            type: 'auto'
        }
    ]

});