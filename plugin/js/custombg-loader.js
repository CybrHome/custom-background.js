function load_all()	{
	
	var i;
	var div = document.createElement('div');
	div.id = 'theme-div';
	document.body.appendChild(div);
	
	for(i=1;i<=10;i++){
	var img = document.createElement('img');
	img.id = 'demo-img-'+i;
	img.className = 'bgfade';
	document.getElementById('theme-div').appendChild(img);
	}
	
	var load1 = document.createElement('script');
	load1.type = 'text/javascript';
	load1.src ='custombg/js/main/custom-background.js';
	document.body.appendChild(load1);
	
	var load4 = document.createElement('style');
	var textNode =  document.createTextNode("#theme-div {position: fixed;z-index: -10;top: 0;left: 0;background-color: black;}#theme-div img.bgfade {position: absolute;top: 0;display: none;width: 100%;height: 100%; z-index: -100;}");
	load4.appendChild(textNode);
	$('head').append(load4);
}

load_all();


function loadOptionsWindow(html_file_path,event) {
		
	$("#options-window").load(html_file_path);  
	
	var load1 = document.createElement('link');
	load1.rel = 'stylesheet';
	load1.type = 'text/css';
	load1.href = 'custombg/css/options-window.css';
	$('head').append(load1);
	
	var load2 = document.createElement('script');
	load2.type = 'text/javascript';
	load2.src ='custombg/js/components/jscolor.js';
	document.body.appendChild(load2);
	
	setTimeout(function(){
	var load1 = document.createElement('script');
	load1.type = 'text/javascript';
	load1.src ='custombg/js/main/options-window.js';
	document.getElementById('options-window').appendChild(load1);		
	setTimeout(function(){$("#options-window").css('display','block')},10);
	},10)
	
}



function Close(){
	$('#options-window').fadeOut();
}
	


$(document).click(function(){	

  $('html').click(function() {
	$('#options-window').hide(); 
  });
  
  $('#options-window').click(function(event) {
	event.stopPropagation();
  });	
			
});