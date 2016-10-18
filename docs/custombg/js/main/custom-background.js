// JavaScript Document

  
 
 
   	var color , col_mode,img_mode,img_auto_time,theme;
	var stopanimation = false
	
//check if localstorage variable is available for the use! 
	if (typeof(Storage) != "undefined") {
		// Store
		
		if(localStorage.col == 'null')
		{
			localStorage.setItem("img",image);
			localStorage.setItem("col", color);
			localStorage.setItem("bg_mode",'defaultbg');
			localStorage.setItem("img_time");
			localStorage.setItem("theme");
			localStorage.setItem("bg_size");
			localStorage.setItem("bg_pos");
			localStorage.setItem("bg_repeat");
		
			var bgsize = localStorage.bg_size,bgposition = localStorage.bg_pos,bgrepeat = localStorage.bg_repeat,flag;

		}
	
	} else {
		document.getElementById("check").value = "Sorry, your browser does not support this feature..";
	}



/*-------------------------------------------------- localStorage Functionalty ends----------------------------------------------*/



	function Defaultbg(){ 
	
	 localStorage.setItem('bg_mode','defaultbg');
	document.body.style.background = 'url(custombg/images/bg-themes/all/all1.jpg)';	 
	 save_opt('no');
	 		$('#save-prompt').fadeIn(1).fadeOut(1500);
	 // refreshed();
	}   

  	function show_main_div()
	{
		$('#options-window').fadeToggle();
	}
	function allclear()
	{
		$('#options-window').fadeOut();
		
	}



// function to show choose type images
	function changeimage(id){
			 
	  image= 'url('+document.getElementById(id).src+')';
		
		document.body.style.background = image;
		path = document.getElementById(id).src;
		//alert(path)
	}
		
	
	function changecolor(id){
		var stopAnimation = true;
	 	color = document.getElementById(id).style.backgroundColor;
	//	localStorage.col = color;
		document.body.style.background = document.getElementById(id).style.backgroundColor;
	}
	

// store choosen color
	function savecol(){

		localStorage.col = color;
		localStorage.bg_mode = 'choosen_color';
		// refreshed();
		//alert('Saved. Please refresh the page');
		$('#save-prompt').fadeIn(1).fadeOut(1500);		
	}
	
	function refreshed(){window.location.href=window.location.href}

	
	function saveimg(){
		localStorage.bg_mode = 'choosen_image';
		//localStorage.img = image;

		$('#save-prompt').fadeIn(1).fadeOut(1500);
		
		image = document.createElement('img');
		document.body.appendChild(image);
		image.setAttribute('style','display:none');
		image.setAttribute('alt','script div');
		image.setAttribute("src", path);
		
		var imgCanvas = document.createElement("canvas"),
		imgContext = imgCanvas.getContext("2d");

		// Make sure canvas is as big as the picture
		imgCanvas.width = image.width;
		imgCanvas.height = image.height;

		// Draw image into canvas element
		imgContext.drawImage(image, 0, 0, image.width, image.height);
		// Save image as a data URL
		imgInfom = imgCanvas.toDataURL("image/png");
		localStorage.setItem("imgInfo",imgInfom);
		

		document.body.style.background = 'url('+imgInfom+')';

//			alert('saved');
		//refreshed();

	}




	function savecustom_img(){
					
		localStorage.bg_mode = 'custom_image';
//		alert('saved' );
		$('#save-prompt').fadeIn(1).fadeOut(1500);
		// refreshed();	
		}

	function savecustom_col(){
		color = $('.color').val();			
		localStorage.bg_mode = 'custom_color';
		localStorage.col = '#'+color;
//		alert(localStorage.col );
		$('#save-prompt').fadeIn(1).fadeOut(1500);
		//refreshed();	
		}
		
	function get_time(){
			
			localStorage.img_time = $('#img-time').val();
			$('#demo').val(localStorage.img_time);
			
		}




/*----------------------------------------------------------------------more options -----------------------------------------------------------------------*/

	function bg_size(){
			bgsize = $("#bg-size-opt").val();
			$('body').css('background-size',bgsize);
		}
	function bg_repeat(){
			bgrepeat = $("#bg-repeat-opt").val();
			$('body').css('background-repeat',bgrepeat);
		}
	function bg_pos(){
			bgposition = $("#bg-pos-opt").val();
			$('body').css('background-position',bgposition);
		}

	function save_opt(id){
			if(id == 'more-opt')
			{
			$('#save-prompt').fadeIn(1).fadeOut(1500);

			localStorage.bg_size = bgsize;
			localStorage.bg_pos = bgposition;
			localStorage.bg_repeat = bgrepeat;
			localStorage.img_time = time; 
//			alert('saved');

			$("#bg-size-opt option[value='"+ localStorage.bg_size +"']").attr('selected', 'selected');
			$("#bg-repeat-opt option[value='"+ localStorage.bg_repeat +"']").attr('selected', 'selected');
			$("#bg-pos-opt option[value='"+ localStorage.bg_pos +"']").attr('selected', 'selected');
			$("#img-time option[value='"+ localStorage.img_time +"']").attr('selected', 'selected');
			
			}
			else{
			$('#save-prompt').fadeIn(1).fadeOut(1500);			

			localStorage.bg_size = 'cover';
			localStorage.bg_pos = 'inherit';
			localStorage.bg_repeat = 'no-repeat';
			localStorage.img_time = 5000; 	
			//refreshed();
			
			$("#bg-size-opt option[value='"+ localStorage.bg_size +"']").attr('selected', 'selected');
			$("#bg-repeat-opt option[value='"+ localStorage.bg_repeat +"']").attr('selected', 'selected');
			$("#bg-pos-opt option[value='"+ localStorage.bg_pos +"']").attr('selected', 'selected');
			$("#img-time option[value='"+ localStorage.img_time +"']").attr('selected', 'selected');
			}
		 }
	
	function demo_image(){}

	var oFReader = new FileReader(),
	rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
	
	oFReader.onload = function(oFREvent) {
	localStorage.setItem('bgimg', oFREvent.target.result);
	openBackground();
	};
	
	function openBackground() {
	var backgroundImage = localStorage.getItem('bgimg');
		if (backgroundImage!=null || backgroundImage!="") {
			$('body').css('background', 'url(' + backgroundImage + ')');
		}
		else {
			$('body').css('background', 'none');
		}
	}
	
	function loadImageFile(testEl) {
		if (! testEl.files.length) { return; }
		var oFile = backgroundbtn.files[0];
		if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
		oFReader.readAsDataURL(oFile);
	}
	
	function switchBackground() {
	var backgroundImagex = localStorage.getItem('bgimg');
		if (backgroundImagex==null || backgroundImagex=="") {
			$('body').css("background",'url("img/wallpaper.jpg")');
		}
		else	{
			$('body').css('background', "url(" + localStorage.getItem('bgimg') + ')');
		}		
	}
	
	function defaultbg() {
	$('body').css("background",'url("img/all/all3.jpg")');
	localStorage.removeItem('bgimg');
	}

		function bg_adjust(){
		if(localStorage.bg_size != 'null'){
			document.body.style.backgroundSize = localStorage.bg_size;
			
			}
		if(localStorage.bg_size == null){
			document.body.style.backgroundSize = 'cover';
			
		}
			
			
		if(localStorage.bg_pos != 'null'){
			document.body.style.backgroundPosition = localStorage.bg_pos;
			}

		if(localStorage.bg_pos == null){
			document.body.style.backgroundPosition = 'inherit';
			
		}

		if(localStorage.bg_repeat != 'null'){
			document.body.style.backgroundRepeat = localStorage.bg_repeat;
			}
		if(localStorage.bg_repeat == null){
			document.body.style.backgroundRepeat = 'no-repeat';
			
		}

		}

	function RND() {
						  var hex = ((Math.floor(Math.random()*0xffffff)+1)).toString(16);
						  while (hex.length < 6) hex = "0" + hex;
						  return hex;
				}
	function create_auto(){
		var div = document.createElement('div');
		div.id = localStorage.theme;
		document.body.appendChild(div);	

		for(var i =1;i<=10;i++){
		var img = document.createElement('img');
		img.className += 'bgfade';		
		div.appendChild(img);
		if(div.id == '#theme-1')
		{
			img.src = "custombg/images/bg-themes/all/all"+i+".jpg";
			
			}	
		if(div.id == '#theme-2')
		{
			img.src = "custombg/images/bg-themes/girls/girl"+i+".jpg";
			
			}	
		if(div.id == '#theme-3')
		{
			img.src = "custombg/images/bg-themes/cars/car"+i+".jpg";
			
			}	
		if(div.id == '#theme-4')
		{
			img.src = "custombg/images/bg-themes/nature/nature"+i+".jpg";
			
			}	
		}
				
	}
	//function that is to be called on scroll
	function theme(i,n,theme_no,block){

		while(i<=n){
		var theme_1 = document.createElement('div');
		theme_1.className += 'cursor-default ';
		theme_1.className += 'div-block ';
		theme_1.className += 'box';
		theme_1.style.background = 'url(custombg/images/loading_dark_large.gif)';

		var img_1 = document.createElement('img');
		img_1.id="theme-"+theme_no+"-img-"+i;
		img_1.className += 'img-block ';


		theme_1.appendChild(img_1);
		document.getElementById(block).appendChild(theme_1); //id of the div in which you want to add the Images

		if(theme_no == 1){
		document.getElementById("theme-"+theme_no+"-img-"+i).src = "custombg/images/bg-themes/all/all"+i+".jpg";			
		}
		else if(theme_no == 2){
			document.getElementById("theme-"+theme_no+"-img-"+i).src = "custombg/images/bg-themes/girls/girl"+i+".jpg";
			}
		else if(theme_no == 3){
			document.getElementById("theme-"+theme_no+"-img-"+i).src = "custombg/images/bg-themes/cars/car"+i+".jpg";
			}
		  	
		else if(theme_no == 4){
			document.getElementById("theme-"+theme_no+"-img-"+i).src = "custombg/images/bg-themes/nature/nature"+i+".jpg";
			}
		img_1.setAttribute('onClick','changeimage(id)');
			
		i++;


		}
	}
	
	
	    		function changeColor(id) {
			
				// Fade Ins
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'red'
				}, 3500);
				}, 400);
			
			
			
				// Fade Outs
				setTimeout(function () {
					$(id).animate({
					backgroundColor:'green'
				}, 4000);
				}, 475);
			
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#D9803D'
				}, 4000);
				}, 475);

				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#9B59B6'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#34495E'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#660000'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#999966'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#C0392B'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#1ABC9C'
				}, 4000);
				}, 475);
				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#16A085'
				}, 4000);
				}, 475);


				setTimeout(function () {
					$(id).animate({
						backgroundColor:'#654E9C'
				}, 4000);
				}, 475);
			 
				// Recall Function
				ReStartchangeColor(id);				
			
			};
			
			
			function ReStartchangeColor(id) {
				setTimeout(function () {
					if(stopanimation == false)
					{
						changeColor(id);
					}
				}, 400);
			}
		function demo_image(theme){

		var i = 1;
		if (theme == '#theme-1')
		{
				while(i <= 10){
						
				document.getElementById('demo-img-'+i).src = 'custombg/images/bg-themes/all/all'+i+'.jpg';
				i++;
						
				}
				flag = true;
			}
	
		else if (theme == '#theme-2')
		{
				while(i <= 10){
						
				document.getElementById('demo-img-'+i).src = 'custombg/images/bg-themes/cars/car'+i+'.jpg';
				i++;
				}
				flag = true;
			}
	
		else if (theme == '#theme-3')
		{
				while(i <= 10){
						
				document.getElementById('demo-img-'+i).src = 'custombg/images/bg-themes/girls/girl'+i+'.jpg';
				i++;
						
				}
				flag = true;
			}
	
		else if (theme == '#theme-4')
		{
				while(i <= 10){
						
				document.getElementById('demo-img-'+i).src = 'custombg/images/bg-themes/nature/nature'+i+'.jpg';
				i++;
						
				}
				flag = true;
			}
		}
	

	
$(document).ready(function(e) {
	
		if( (localStorage.bg_mode == 'defaultbg'))
			{
				
				document.body.style.background = 'url(custombg/images/bg-themes/all/all1.jpg)';
		bg_adjust();
				
			}


// check background mode and load background color		
		if( (localStorage.bg_mode == 'choosen_color') || (localStorage.bg_mode == 'custom_color'))
			{
				
				document.body.style.background = localStorage.col;
				
			}
            
 		if( localStorage.bg_mode == 'random_color'){
					
				document.body.style.background = '#'+RND();
						
		}
		
		if( localStorage.bg_mode == 'changing_color'){
		var stopAnimation = false;
			changeColor('body');

			

						
		}
		
				// check background mode and load background color		
		if(localStorage.bg_mode == 'choosen_image')
			{

				document.body.style.background = 'url('+localStorage.getItem('imgInfo')+')';
		bg_adjust();
				
			}
		if(localStorage.bg_mode == 'custom_image')
		{
			
			var backgroundImage = localStorage.getItem('bgimg');
			$('body').css('background', 'url(' + backgroundImage + ')');
		bg_adjust();
			
			}
			
		if(localStorage.bg_mode == 'auto_change_image')
		{
		
		 demo_image(localStorage.theme);	
		changing_img_bg(localStorage.theme,flag);

		bg_adjust();
			
			}

	
		if( localStorage.bg_mode == 'random_image'){
			
				
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
				}
			if(localStorage.theme == '#theme-1')
					{
						var num =  getRandomInt(1,10);
						var whichimage = 'custombg/images/bg-themes/all/all'+num+'.jpg';		
						document.body.style.background = 'url(' + whichimage + ')';
					}
			else if(localStorage.theme == '#theme-2')
					{
						var num =  getRandomInt(1,10);
						var whichimage = 'custombg/images/bg-themes/cars/car'+num+'.jpg';		
						document.body.style.background = 'url(' + whichimage + ')';
					}
			else if(localStorage.theme == '#theme-3')
					{
						var num =  getRandomInt(1,10);
						var whichimage = 'custombg/images/bg-themes/girls/girl'+num+'.jpg';		
						document.body.style.background = 'url(' + whichimage + ')';
					}
			else if(localStorage.theme == '#theme-4')
					{
						var num =  getRandomInt(1,10);
						var whichimage = 'custombg/images/bg-themes/nature/nature'+num+'.jpg';		
						document.body.style.background = 'url(' + whichimage + ')';
					}
		bg_adjust();


		}

	

	

		
	//backgorund image Slider
		function changing_img_bg(theme,flag){
		if(flag){
			
				$('img.bgfade').hide();
				var dg_H = window.outerHeight;
				var dg_W = window.outerWidth;
				$('#theme-div').css({'height':dg_H,'width':dg_W});
		function anim() {
			
				$("#theme-div img.bgfade").first().appendTo('#theme-div').fadeOut(1500);
				$("#theme-div img").first().fadeIn(1500);
				
				if(localStorage.img_time){
					time = localStorage.img_time;
				}
				else{ time = 5000;}
				 slider  = setTimeout(anim,time);
				
			}
		}
		anim();
	}
	
    });