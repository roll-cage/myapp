Ext.define("Myapp.controller.cont", {
    extend: "Ext.app.Controller",
    config: {
    refs: {
        timer: "viewT"
    },
    control: {
    	timer: {
        timerFnStart: "timerFn"
    }
    }},
    

    
    timerFn: function () {
    	document.getElementById("alarm").load();
    	Ext.getCmp('startButton').disable();
		var startZeit = Date.now();
		var minuten = Ext.get('min').getHtml();
		var tmpSeconds = 60*minuten;
		var zaehler=setInterval(function(){
			var zeitLaeuft = (Date.now()-startZeit)/1000;
			tmpSeconds--;
			var min = Math.floor(tmpSeconds/60);
			var sec = tmpSeconds-min*60;
			Ext.get('min').setHtml(min);
			Ext.get('sec').setHtml(sec<10?'0'+sec:sec);
			if(zeitLaeuft >= minuten*60)
			{
			   clearInterval(zaehler);
			   document.getElementById('alarm').play();
			   Ext.getCmp('tonAus').show();
			   Ext.getCmp('startButton').enable();
			   return;
			}
			
		}, 1000);
		 
}
});