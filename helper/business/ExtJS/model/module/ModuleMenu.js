//@charset UTF-8
Ext.define( 'iSterilization.model.module.ModuleMenu', {
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
            name: 'parentid',
            type: 'int'
        }, {
            name: 'glyph',
            type: 'auto'
        }, {
            name: 'moduleid',
            type: 'int'
        }, {
            name: 'menuid',
            type: 'int'
        }, {
            name: 'isactive',
            type: 'boolean'
        }, {
            name: 'name',
            type: 'auto'
        }, {
            name: 'orderby',
            type: 'auto'
        }
    ]

});