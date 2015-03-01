Ext.define('Myapp.view.Timer', {
	extend :'Ext.Panel',
	id: 'panel',
	requires: ['Ext.field.Select','Ext.Audio'],
	xtype: 'timercard',
	alias:  "widget.viewT",
	config : {
		title : 'Timer',
		iconCls:'action'
	},
	initialize: function () {
		
	    this.callParent(arguments);

	    
	    var button = {
	    		
		        xtype: "button",
		        text: 'Starten',
		        height:"50%",
		        id: 'startButton',
		        disabled: false,
		        handler: this.start,
		        scope: this
		        };
	    
	    var selektion={
                xtype: 'selectfield',
                label: 'Choose one',
                value: 10,
                options: [{
                    text: '1 Minute',
                    value: 1
                }, {
                    text: '2 Minuten',
                    value: 2
                }, {
                    text: '3 Minuten',
                    value: 3
                }, {
                    text: '4 Minuten',
                    value: 4
                }, {
                    text: '5 Minuten',
                    value: 5
                }, {
                    text: '6 Minuten',
                    value: 6
                }, {
                    text: '7 Minuten',
                    value: 7
                }, {
                    text: '8 Minuten',
                    value: 8
                }, {
                    text: '9 Minuten',
                    value: 9
                }, {
                    text: '10 Minuten',
                    value: 10
                }, {
                    text: '11 Minuten',
                    value: 11
                }, {
                    text: '12 Minuten',
                    value: 12
                }, {
                    text: '13 Minuten',
                    value: 13
                }, {
                    text: '14 Minuten',
                    value: 14
                }, {
                    text: '15 Minuten',
                    value: 15
                }, {
                    text: '16 Minuten',
                    value: 16
                }, {
                    text: '17 Minuten',
                    value: 17
                }, {
                    text: '18 Minuten',
                    value: 18
                }, {
                    text: '19 Minuten',
                    value: 19
                }, {
                    text: '20 Minuten',
                    value: 20
                }
                ],
                listeners: {
            "change": function(selektion) {
            	selectedValue = selektion.getValue();
                Ext.get('min').setHtml(selectedValue);
                Ext.get('sec').setHtml('00');
            }
        }
	    };
	    
	    var timerToolbar = {
		        xtype: "toolbar",
		        html:'<font color="#FF0000"><span id="min">10</span>:<span id="sec">00</span></font>',
		        docked: "top",
		        items: [
		            selektion
		        ]
		    };
	    var audio = {
		        xtype: "container",
		        items: [
					{
					     xtype: 'button',
					     ui: 'decline',
					     id: 'tonAus',
					     height:"40%",
					     hidden: true,
					     text:'Reset',
					     handler: function() {
					    	 document.getElementById('alarm').pause();
					         this.hide();
					         Ext.get('min').setHtml('10');
					         Ext.get('sec').setHtml('00');
					     }
					}
		        ]
		    };
	    
	    this.add([button,timerToolbar,audio]);
	},

	
	start: function () {
	    this.fireEvent("timerFnStart", this);
	}
});																																																																																																																																																																			//Michael Sann