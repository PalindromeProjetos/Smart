//@charset UTF-8
Ext.define( 'Smart.view.main.Helper', {
    extend: 'Ext.container.Container',

    xtype: 'mainhelper',

    requires: [
        'Smart.store.Entity',
        'Smart.store.Fields',
        'Ext.grid.plugin.CellEditing'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this;

        Ext.create('Smart.store.Entity');
        Ext.create('Smart.store.Fields');

        me.items = [
            {
                flex: 1,
                xtype: 'container'
            }, {
                flex: 1,
                xtype: 'form',
                minWidth: 800,
                maxWidth: 1200,
                layout: 'border',
                buttonAlign: 'center',
                buttons: [
                    {
                        scale: 'medium',
                        text: 'Confirmar',
                        handler: 'doConfirm'
                    }
                ],
                items: [
                    {
                        region: 'north',
                        xtype: 'form',
                        layout: 'anchor',
                        title: 'Smart - Class Builder',
                        defaultType: 'fieldcontainer',
                        defaults: {
                            defaultType: 'textfield',
                            layout: 'hbox',
                            anchor: '100%',
                            defaults: {
                                allowBlank: false
                            }
                        },
                        items: [
                            {
                                fieldLabel: 'Parâmetros da Entidade',
                                items: [
                                    {
                                        flex: 1,
                                        layout: 'hbox',
                                        name: 'namespace',
                                        fieldLabel: 'Namespace ( Nome da Aplicação )'
                                    }, {
                                        flex: 1,
                                        margin: '0 0 0 10',
                                        xtype: 'combobox',
                                        store: 'entity',
                                        name: 'model',
                                        displayField: 'TABLE_NAME',
                                        valueField: 'TABLE_NAME',
                                        fieldLabel: 'Model ( Nome da Tabela no Banco )',
                                        listeners: {
                                            change: 'onChangeTable',
                                            select: 'onSelectTable'
                                        }
                                    }
                                ]
                            }, {
                                items: [
                                    {
                                        flex: 1,
                                        name: 'cache',
                                        emptyText: 'Cache\\' + '\\',
                                        fieldLabel: 'Cache ( Repositórios de DML´s Customizados )'
                                    }, {
                                        flex: 1,
                                        margin: '0 0 0 10',
                                        name: 'event',
                                        emptyText: 'Event\\' + '\\',
                                        allowBlank: true,
                                        fieldLabel: 'Event ( Eventos do Model, opcional )'
                                    }
                                ]
                            }, {
                                items: [
                                    {
                                        flex: 1,
                                        checked: true,
                                        xtype: 'checkboxfield',
                                        fieldLabel: 'ExtJS',
                                        boxLabel: 'Gerar DataPackage',
                                        name: 'datapackage',
                                        listeners: {
                                            change: 'onChangeDataPackage'
                                        }
                                    }, {
                                        flex: 1,
                                        margin: '0 0 0 10',
                                        name: 'package',
                                        fieldLabel: 'DataPackage ( Model e Store ExtJS )',
                                        emptyText: 'package.ClassName ( Nome da Tabela no Banco )'
                                    }
                                ]
                            }
                        ]
                    }, {
                        region: 'center',
                        rowLines: false,
                        hideHeaders: false,
                        xtype: 'gridpanel',
                        title: 'Campos da Entidade',
                        tools: [
                            {
                                type: 'search',
                                handler: 'onSelectTable'
                            }
                        ],
                        store: 'fields',
                        selModel: 'cellmodel',
                        plugins: {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        },
                        columns: [
                            {
                                align: 'center',
                                header: 'CODE',
                                dataIndex: 'ORDINAL_POSITION',
                                width: 60,
                                renderer: function (value, metaData, record) {
                                    metaData.style = "background: #F5F9E8";
                                    return value;
                                }
                            }, {
                                header: 'NAME',
                                dataIndex: 'COLUMN_NAME',
                                flex: 1
                            }, {
                                header: 'TYPE',
                                dataIndex: 'DATA_TYPE',
                                width: 80
                            }, {
                                header: 'LENGTH',
                                dataIndex: 'CHARACTER_MAXIMUM_LENGTH',
                                width: 100
                            }, {
                                header: 'DEFAULT',
                                dataIndex: 'COLUMN_DEFAULT',
                                width: 100,
                                renderer: function (value, metaData, record) {
                                    metaData.style = "background: #F5F9E8";
                                    return value;
                                }
                            }, {
                                header: 'NULLABLE',
                                dataIndex: 'IS_NULLABLE',
                                width: 90
                            }, {
                                header: '<div style="color: red">POLICY</div>',
                                dataIndex: 'HAS_POLICY',
                                xtype: 'checkcolumn',
                                width: 70,
                                stopSelection: false,
                                listeners: {
                                    checkchange: 'onCheckChange'
                                }
                            }, {
                                header: '<div style="color: red">IGNORE</div>',
                                dataIndex: 'HAS_IGNORE',
                                xtype: 'checkcolumn',
                                width: 70,
                                stopSelection: false,
                                listeners: {
                                    checkchange: 'onCheckChange'
                                }
                            }, {
                                header: '<div class="x-tool-img x-tool-help"></div>',
                                width: 36,
                                align: 'center',
                                renderer: function (value, meta, rec) {
                                    return '<span style="color: #D9D6C5; cursor: pointer;font-size: 16px;"><i class="icon-comment"></i></span>';
                                }
                            }
                        ],
                        listeners: {
                            celldblclick: 'onCelldDlClick'
                        }
                    }
                ]
            }, {
                flex: 1,
                xtype: 'container'
            }
        ];
    }

});