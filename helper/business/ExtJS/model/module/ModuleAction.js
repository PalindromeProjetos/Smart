//@charset UTF-8
Ext.define( 'iSterilization.model.module.ModuleAction', {
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
            name: 'menuid',
            type: 'int'
        }, {
            name: 'actionid',
            type: 'int'
        }, {
            name: 'isactive',
            type: 'boolean'
        }
    ]

});