Ext.define('Myapp.view.Home', {
	extend :'Ext.Panel',
	requires: ['Ext.Picker'],
	xtype: 'homecard',
	config : {
	html: '<h2 id="welcome"></h2>', //why not styled?
		title : 'Home',
		iconCls:'home'
	},
	initialize: function () {
		var homeToolbar = {
		        xtype: "toolbar",
		        title: '<span id="greet"></span>',
		        docked: "top"
		    };
		
	    this.callParent(arguments);
	    var begrWaehlen = Ext.create('Ext.Picker', {
	        cancelButton: false,
	        doneButton:"OK",
	        toolbar: {
	            ui: 'light',
	            title: 'Begrüßung auswählen'
	        },
	        slots: [
	            {
	            	name:"picker",
	                title: 'Speed',
	                data : [
	                    {text: 'Hallo', value: "Hallo"},
	                    {text: 'Servus', value: 'Servus'},
	                    {text: 'Guten Tag', value: 'Guten Tag'},
	                    {text: 'Grüße', value: 'Grüße'}
	                ]
	            }
	        ],listeners: {
                "change": function(begrWaehlen) {
                
            	selectedValue = begrWaehlen.getValue().picker;

                Ext.get('greet').setHtml(selectedValue);
                Ext.get('welcome').setHtml("Herzlich Willkommen zur Timer App!");
            }
        }
	    });
	    this.add([begrWaehlen, homeToolbar]);
	    begrWaehlen.show();
	}
});