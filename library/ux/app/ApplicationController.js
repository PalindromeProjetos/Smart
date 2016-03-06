//@charset UTF-8
Ext.define( 'Smart.ux.app.ApplicationController', {
    extend: 'Smart.app.ControllerBase',

    requires: [
        'Smart.app.ControllerBase'
    ],

    init: function () {
        var me = this;

        me.addRef([
            {
                ref: 'MainTree',
                selector: 'app-main treelist'
            }, {
                ref: 'MainPage',
                selector: 'app-main panel[name=centerpage]'
            }
        ]);

        me.control({
            'app-main treelist': {
                selectionchange: 'onChangeRouter'
            }
        });

    },

    setDefaultPage: function () {
        var me = this,
            mainPage = me.getMainPage(),
            treeList = mainPage ? mainPage.up('app-main').down('treelist') : null;

        if(mainPage) {
            mainPage.removeAll();
            treeList.setSelection(0);
        }
    },

    onChangeRouter: function(rm, rc) {
        var me = this,
            router = rc ? rc.get('router') : null;
        if(router) {
            me.redirectTo( router );
        }
    },

    onMainPageView: function(config, fn) {
        var me = this,
            mainPage = me.getMainPage(),
            cmp = mainPage ? mainPage.down(config.xtype) : null,
            updateRegion = function () {
                mainPage.removeAll();
                cmp = mainPage.add( config );

                if (Ext.isFunction( fn ) == true) {
                    fn();
                }
            };

        if(mainPage) {
            if(mainPage.items.getCount()) {
                var panelCenter = mainPage.down(mainPage.items.getAt(0));
                mainPage.down(panelCenter.xtype).removeCls(panelCenter.animateClsIn);
                mainPage.down(panelCenter.xtype).addCls(panelCenter.animateClsOut);
                Ext.defer(function () { updateRegion(); }, 300);
            }
            else updateRegion();
        }

        return cmp;
    },

    //routes ========================>

    setContractList: function () {
        var me = this,
            rc = me.getMainTree().getSelection();

        me.onMainPageView({ xtype: 'contractlist', iconCls: rc.get("iconCls") });
    }

    //routes ========================>

});