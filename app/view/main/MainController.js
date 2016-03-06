//@charset UTF-8
Ext.define('Smart.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Smart.util.Message'
    ],

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onChangeDataPackage: function (field, newValue, oldValue, eOpts) {
        var me = this,
            view = me.getView().down('mainhelper');

        view.down('textfield[name=package]').setDisabled(!newValue);
    },

    onChangeTable: function ( field, newValue ) {
        var form = field.up('form');
        form.down('textfield[name=cache]').setValue('Cache\\'+'\\'+newValue);
        form.down('textfield[name=event]').setValue('Event\\'+'\\'+newValue);
    },

    onSelectTable: function ( combo, record, eOpts ) {
        var me = this,
            view = me.getView().down('mainhelper'),
            form = view.down('form'),
            grid = view.down('gridpanel'),
            classname = form.down('textfield[name=model]');

        form.setLoading('Carregando ...');

        grid.store.setParams({
            query: classname.getValue(),
            action: 'selectFields'
        }).load({
            callback: function() {
                form.setLoading(false);
            }
        });
    },

    onCheckChange: function ( checkChange, rowIndex, checked, eOpts ) {
        Ext.getStore('fields').getAt(rowIndex).commit();
    },

    doConfirm: function (btn) {
        var me = this,
            rows = [],
            view = me.getView().down('mainhelper'),
            form = view.down('form'),
            store =  Ext.getStore('fields');

        if(form.isValid() && store.getCount() !== 0) {
            store.each(function (record,index) {
                rows.push(record.data);
            },me);
        }

        if(rows.length !== 0 ) {

            form.setLoading('Criando classes ...');

            form.submit({
                scope: me,
                url: store.getUrl(),
                params: {
                    rows: Ext.encode(rows),
                    action: 'createClasse'
                },
                success: function(frm, action) {
                    form.setLoading(false);
                },
                failure: function (frm, action) {
                    console.info(frm, action);
                    form.setLoading(false);
                }
                //failure: Smart.Msg.submitFailure
            });
        }
    },

    changeFields: function (btn) {
        var me = this,
            win = btn.up('window'),
            frm = win.down('form');

        Ext.Object.each(frm.getValues(), function(key, value) {
            win.xdata.set(key,value);
        });

        win.xdata.commit();

        me.doClose(btn);
    },

    resetFields: function (btn) {
        var me = this,
            win = btn.up('window'),
            frm = win.down('form');

        frm.reset();
        me.changeFields(btn);
    },

    doClose: function (btn) {
        btn.up('window').close();
    },

    onCelldDlClick: function ( viewTable, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
        var comment = Ext.widget('maincomment',{ xdata: record });

        if(cellIndex === 8) {
            comment.show(null,function () {
                comment.down('form').loadRecord(record);
            });
        }
    }

});