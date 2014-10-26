function load_all()	{
	var load1 = document.createElement('script');
	load1.type = 'text/javascript';
	load1.src ='custombg/js/main/custom-background.js';
	document.body.appendChild(load1);	
}
load_all();

function loadOptionsWindow() {
		
	$("#main-div").load("custombg/options-window.html");  
	
	var load1 = document.createElement('script');
	load1.type = 'text/javascript';
	load1.src ='custombg/js/main/options-window.js';
	document.body.appendChild(load1);
	
	var load2 = document.createElement('script');
	load2.type = 'text/javascript';
	load2.src ='custombg/js/components/jscolor.js';
	document.body.appendChild(load2);
	
	var load3 = document.createElement('link');
	load3.rel = 'stylesheet';
	load3.type = 'text/css';
	load3.href = 'custombg/css/options-window.css';
	$('head').append(load3);
	
	$("#main-div").css('display','block');
}