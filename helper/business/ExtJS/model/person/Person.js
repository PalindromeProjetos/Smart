//@charset UTF-8
Ext.define( 'iSterilization.model.person.Person', {
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
            name: 'name',
            type: 'auto'
        }, {
            name: 'shortname',
            type: 'auto'
        }, {
            name: 'typeperson',
            type: 'auto'
        }, {
            name: 'mainmail',
            type: 'auto'
        }, {
            name: 'address',
            type: 'auto'
        }, {
            name: 'addressneighborhood',
            type: 'auto'
        }, {
            name: 'addresscomplement',
            type: 'auto'
        }, {
            name: 'addresszipcode',
            type: 'auto'
        }, {
            name: 'addressnumber',
            type: 'auto'
        }, {
            name: 'addresslocality',
            type: 'auto'
        }, {
            name: 'addressfederationunit',
            type: 'auto'
        }, {
            name: 'isactive',
            type: 'boolean'
        }, {
            name: 'cnesnumber',
            type: 'auto'
        }, {
            name: 'filedata',
            type: 'auto'
        }, {
            name: 'fileinfo',
            type: 'auto'
        }
    ]

});