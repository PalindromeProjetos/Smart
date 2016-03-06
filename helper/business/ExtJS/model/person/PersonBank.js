//@charset UTF-8
Ext.define( 'iSterilization.model.person.PersonBank', {
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
            name: 'personid',
            type: 'int'
        }, {
            name: 'bank',
            type: 'int'
        }, {
            name: 'agency',
            type: 'int'
        }, {
            name: 'accountnumber',
            type: 'int'
        }, {
            name: 'accounttype',
            type: 'auto'
        }, {
            name: 'isdefault',
            type: 'boolean'
        }
    ]

});