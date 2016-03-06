//@charset UTF-8
Ext.define( 'iSterilization.model.holiday.Holiday', {
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
            name: 'description',
            type: 'auto'
        }, {
            name: 'holidaytype',
            type: 'auto'
        }, {
            name: 'holidaydate',
            type: 'auto',
            serializeType: 'date'
        }, {
            name: 'isactive',
            type: 'boolean'
        }
    ]

});