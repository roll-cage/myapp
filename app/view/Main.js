Ext.define('Myapp.view.Main', {
	extend : 'Ext.TabPanel',
	requires: ['Myapp.view.Home',
	           'Myapp.view.Timer'
	],
	
	config : {
		
		defaults : {
			styleHtmlContent : true
		},tabBar:{
			docked:'bottom',
			layout:{
				pack:'center',
			}
		},
		items : [ 
			{xtype:'homecard'},
			{xtype:'timercard'}

		]
	}
});