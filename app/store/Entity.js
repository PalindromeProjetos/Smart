//@charset UTF-8
Ext.define( 'Smart.store.Entity', {
    extend: 'Smart.store.Fields',

    alias: 'store.Entity',

    pageSize:  10000,

    storeId: 'entity',

    fields: [
        {
            name: 'TABLE_NAME',
            type: 'auto'
        }
    ],

    config: {
        extraParams: {
            action: 'selectTables'
        }
    }

});