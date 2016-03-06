//@charset UTF-8
Ext.define( 'Smart.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Smart.view.main.MainController',
        'Smart.view.main.Helper'
    ],

    controller: 'main',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretch'
        },
        title: {
            text: 'Smart',
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        padding: 20,
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    textAlign: 'left'
                },
                tall: {
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Home',
            xtype: 'mainhelper'
        }, {
            title: 'Users'
        }, {
            title: 'Groups'
        }, {
            title: 'Settings'
        }
    ]

});