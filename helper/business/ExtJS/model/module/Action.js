//@charset UTF-8
Ext.define( 'iSterilization.model.module.Action', {
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
            name: 'directive',
            type: 'auto'
        }, {
            name: 'description',
            type: 'auto'
        }, {
            name: 'isactive',
            type: 'boolean'
        }
    ]

});