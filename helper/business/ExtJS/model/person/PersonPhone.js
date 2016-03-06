//@charset UTF-8
Ext.define( 'iSterilization.model.person.PersonPhone', {
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
            name: 'description',
            type: 'auto'
        }, {
            name: 'phonetype',
            type: 'auto'
        }, {
            name: 'linetype',
            type: 'auto'
        }, {
            name: 'ddd',
            type: 'auto'
        }, {
            name: 'phonenumber',
            type: 'auto'
        }, {
            name: 'phoneoperator',
            type: 'auto'
        }, {
            name: 'isdefault',
            type: 'boolean'
        }
    ]

});