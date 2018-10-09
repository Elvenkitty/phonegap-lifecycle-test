var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

//deviceready event listener - deviceready
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    //event listeners and handlers are listed in www\js\index.js
	//lifecycle event onDeviceReady, resume which bring the app back to the foreground and pause which send the app to the background
	
    function onDeviceReady() {
	
	//resume event listener - foreground
	document.addEventListener("resume", onResume, false);
	//pause event listener - background
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
