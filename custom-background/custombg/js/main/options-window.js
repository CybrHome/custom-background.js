/* custom-background.js 1.0.0 */

 function preinstalled(){
		$('.tab-1').addClass('activated-menu');
		$('#choose-img').addClass('activated-menulist');
		$('#choose-col').addClass('activated-menulist');
	}
	preinstalled();

	

  
  	$('.tab-1').click(function(){
		$('#col_opt').hide();
		$('#tabs-2').hide();
		$('#tabs-1').fadeIn(1);		
		$('#img_opt').fadeIn(1);
		
		});
	$('.tab-2').click(function(){
		$('#img_opt').hide();
		$('#tabs-1').hide();
		
		$('#tabs-2').fadeIn(1);		
		$('#col_opt').fadeIn(1);
         setInterval(function(){show_color();},3000);

		});
  
 	

          function show_color(){
            setTimeout(function(){
            document.getElementById('random-col-demo').style.backgroundColor = '#'+RND();
            document.getElementById('random-col-demo').innerHTML = '<p>Random color after each refresh</p>'},4000);

            setTimeout(function(){document.getElementById('random-col-demo').innerHTML = "<p>Random color after each refresh</p><img src='custombg/images/loading.gif' style='margin-top:20px;'>"},3000);
          
        
         }	
                
         //setInterval(function(){show_color();},3000);
           
			

			
  		document.getElementById('random-col-demo').style.background = '#'+RND();	
		      
        
	
	//storing random color	
	$('#random-col-click').click(function(){
		
		localStorage.bg_mode = 'random_color';
		// refreshed();
	$('#save-prompt').fadeIn(1).fadeOut(1500);

//		alert('Saved. Please refresh the page');				
		});
	//storing auto changing color
	$('#auto-col-click').click(function(){
		localStorage.bg_mode = 'changing_color';
	$('#save-prompt').fadeIn(1).fadeOut(1500);

		refreshed();	
//		alert('Saved. Please refresh the page auto click');
	});		

	$('#random-img-click').click(function(){
		localStorage.bg_mode = 'random_image';
		localStorage.theme = theme;
//		alert('saved');
		$('#save-prompt').fadeIn(1).fadeOut(1500);	
		// refreshed();				
		});


//storing auto changing image
	$('#auto-img-click').click(function(){
		localStorage.bg_mode = 'auto_change_image';
		localStorage.theme = theme;
//		alert(localStorage.bg_mode);
	$('#save-prompt').fadeIn(1).fadeOut(1500);
		// refreshed();
	});
    



		
	$('.tab-1').click(function(){
		$('.tab-1').addClass('activated-menu');
		$('.tab-2').removeClass('activated-menu');
		$('.tab-3').removeClass('activated-menu');
		});
		
	$('.tab-2').click(function(){
		$('.tab-2').addClass('activated-menu');
		$('.tab-1').removeClass('activated-menu');
		$('.tab-3').removeClass('activated-menu');
		});

	$('.tab-3').click(function(){
		$('.tab-3').addClass('activated-menu');
		$('.tab-1').removeClass('activated-menu');
		$('.tab-2').removeClass('activated-menu');
		});
			
	
		//show themes on Scroll	
		var i =2;
		$('#choose-img-content').bind('scroll', function()
		  {
			if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
			{
				if(i <5)
				{
					theme(1,10,i,'block-'+i);
					i++
				}
			}
		  });


	$('#choose-img').click(function(){
		 $("#random-img-content").hide();
		 $("#custom-img-content").hide();
		 $('#auto-img-content').hide();
		 $('#more-opt-content').hide();
		 $("#choose-img-content").fadeIn(500);
		 
		 $('#random-img-click').hide();
		 $('#custom-img-click').hide();
		 $('#auto-img-click').hide();
		 $('#Clse').show();
		 $('.reset').show();
		 $('#choose-img-click').fadeIn(1);
		 
		 
		 $('#choose-img').addClass('activated-menulist');
		 $('#random-img').removeClass('activated-menulist');
		 $('#custom-img').removeClass('activated-menulist');
		 $('#auto-img').removeClass('activated-menulist');				
		 $('#setting').removeClass('activated-menulist');		

	 });
	$('#random-img').click(function(){
		 $("#choose-img-content").hide();
		 $("#custom-img-content").hide();
		 $('#auto-img-content').hide();
		 $('#more-opt-content').hide();
		 $("#random-img-content").fadeIn(500);
		 
		 $('#choose-img-click').hide();
		 $('#custom-img-click').hide();
		 $('#auto-img-click').hide();
		 $('#Clse').show();
		 $('.reset').show();
		 $('#random-img-click').fadeIn(1);
		 
		 
 		 $('#random-img').addClass('activated-menulist');
		 $('#choose-img').removeClass('activated-menulist');
		 $('#custom-img').removeClass('activated-menulist');
		 $('#auto-img').removeClass('activated-menulist');
		 $('#setting').removeClass('activated-menulist');		
		
	});	
	$('#custom-img').click(function(){
		 $("#choose-img-content").hide();
		 $("#random-img-content").hide();
		 $('#auto-img-content').hide();
		 $('#more-opt-content').hide();
		 $("#custom-img-content").fadeIn(500);
		 
		 $('#choose-img-click').hide();
		 $('#random-img-click').hide();
		 $('#auto-img-click').hide();
		 $('#Clse').show();
		 $('.reset').show();
		 $('#custom-img-click').fadeIn(1);
		 
		 
		 $('#custom-img').addClass('activated-menulist');
		 $('#random-img').removeClass('activated-menulist');
		 $('#choose-img').removeClass('activated-menulist');
		 $('#auto-img').removeClass('activated-menulist');
		 $('#setting').removeClass('activated-menulist');		

	});
    


	$('#auto-img').click(function(){
		 $("#choose-img-content").hide();
		 $("#random-img-content").hide();
		 $("#custom-img-content").hide();
		 $('#more-opt-content').hide();
		 $('#auto-img-content').fadeIn(100);

		 $('#choose-img-click').hide();
		 $('#random-img-click').hide();
		 $('#custom-img-click').hide();
		 $('.reset').show();
		 $('#Clse').show();
		 $('#auto-img-click').fadeIn(1);
		 

		 $('#auto-img').addClass('activated-menulist');
		 $('#random-img').removeClass('activated-menulist');
		 $('#choose-img').removeClass('activated-menulist');
		 $('#custom-img').removeClass('activated-menulist');
		 $('#setting').removeClass('activated-menulist');		

	});
	
	$('#setting').click(function(){
		
		 $("#choose-img-content").hide();
		 $("#random-img-content").hide();
		 $("#custom-img-content").hide();
		 $('#auto-img-content').hide();
		 $('#more-opt-content').fadeIn();
		 
		 $('#choose-img-click').hide();
		 $('#random-img-click').hide();
		 $('#custom-img-click').hide();
		 $('#auto-img-click').hide();
		 $('.reset').hide();
		 $('#Clse').hide();
		 $('#more-opt-content').fadeIn(1);

		 $('#auto-img').removeClass('activated-menulist');
		 $('#random-img').removeClass('activated-menulist');
		 $('#choose-img').removeClass('activated-menulist');
		 $('#custom-img').removeClass('activated-menulist');
		 $('#setting').addClass('activated-menulist');		
		
		});
	
	
	$('#choose-col').click(function(){
		 $('#auto-col-content').hide();
		 $("#random-col-content").hide();
		 $("#custom-col-content").hide();		 
		 $("#choose-col-content").fadeIn(100);
		 
		 $('#random-col-click').hide();
		 $('#custom-col-click').hide();
		 $('#auto-col-click').hide();
		 $('#choose-col-click').fadeIn(1);
		 
		 
		 $('#choose-col').addClass('activated-menulist');
		 $('#random-col').removeClass('activated-menulist');
		 $('#custom-col').removeClass('activated-menulist');
		 $('#auto-col').removeClass('activated-menulist');		
	});


	$('#random-col').click(function(){
		 $("#choose-col-content").hide();
		 $('#auto-col-content').hide();
		 $("#custom-col-content").hide();
		 $("#random-col-content").fadeIn(100);

		 $('#choose-col-click').hide();
		 $('#custom-col-click').hide();
		 $('#auto-col-click').hide();
		 $('#random-col-click').fadeIn(100);
		 
		 $('#random-col').addClass('activated-menulist');
		 $('#choose-col').removeClass('activated-menulist');
		 $('#custom-col').removeClass('activated-menulist');
		 $('#auto-col').removeClass('activated-menulist');
	});

	$('#custom-col').click(function(){
		 $("#choose-col-content").hide();
		 $("#random-col-content").hide();
		 $('#auto-col-content').hide();
		 $("#custom-col-content").fadeIn(100);

		 $('#choose-col-click').hide();
		 $('#random-col-click').hide();
		 $('#auto-col-click').hide();
		 $('#custom-col-click').fadeIn(1);

		 
		 $('#custom-col').addClass('activated-menulist');
		 $('#random-col').removeClass('activated-menulist');
		 $('#choose-col').removeClass('activated-menulist');
		 $('#auto-col').removeClass('activated-menulist');
	});

	$('#auto-col').click(function(){
		 $("#choose-col-content").hide();
		 $("#random-col-content").hide();
		 $("#custom-col-content").hide();
		 $('#auto-col-content').fadeIn(100);
		 
		 $('#choose-col-click').hide();
		 $('#random-col-click').hide();
		 $('#custom-col-click').hide();
		 $('#auto-col-click').fadeIn(100);
		
		 
		 $('#auto-col').addClass('activated-menulist');
		 $('#random-col').removeClass('activated-menulist');
		 $('#choose-col').removeClass('activated-menulist');
		 $('#custom-col').removeClass('activated-menulist');
	});
    
               
	
		$('#auto_theme-1').click(function(){
			$('#auto_theme-2').removeClass('selected-theme');
			$('#auto_theme-3').removeClass('selected-theme');
			$('#auto_theme-4').removeClass('selected-theme');
			$('#auto_theme-1').toggleClass('selected-theme');
			//document.body.style.background = 'url('+$('#auto_theme-1>img').attr('src')+')';
//			//document.getElementsByName('theme');

//			changing_img_bg(theme,false);
			
			theme = '#theme-1';
								
//			changing_img_bg(theme,true);
		
			$('#demo').val(theme);							
			});
			
			function demo_live(a,b,j){
			
				interval = setInterval(function(){
					j+=1;					
					$(a+'> img').attr('src',b+j+'.jpg');					
					j%=10;
					
				}, 800);				
			
				}
                
			
			$('#auto_theme-1').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#auto_theme-1';
				 b = 'custombg/images/bg-themes/all/all';

					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									

					demo_live(a,b,j);
				
				},function(e){
					clearInterval(interval);
			});
			
		$('#auto_theme-2').click(function(){
			$('#auto_theme-1').removeClass('selected-theme');
			$('#auto_theme-3').removeClass('selected-theme');
			$('#auto_theme-4').removeClass('selected-theme');
			$('#auto_theme-2').toggleClass('selected-theme');
//			document.body.style.background = 'url('+$('#auto_theme-2>img').attr('src')+')';
//			changing_img_bg(theme,false);
			theme = '#theme-2';
		
//			changing_img_bg(theme,true);

			$('#demo').val(theme);

			});
			
			$('#auto_theme-2').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#auto_theme-2';
				 b = 'custombg/images/bg-themes/cars/car';
					
					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									
					demo_live(a,b,j);
				
				},function(e){
					clearInterval(interval);
			});

		$('#auto_theme-3').click(function(){
			$('#auto_theme-1').removeClass('selected-theme');
			$('#auto_theme-3').removeClass('selected-theme');
			$('#auto_theme-4').removeClass('selected-theme');
			$('#auto_theme-3').toggleClass('selected-theme');
			theme = '#theme-3';
	

			
			$('#demo').val(theme);

			});
			
			$('#auto_theme-3').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#auto_theme-3';
				 b = 'custombg/images/bg-themes/girls/girl';
					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									
									
					demo_live(a,b,j);
					
				},function(e){
					clearInterval(interval);
			});
				
				
		$('#auto_theme-4').click(function(){
			$('#auto_theme-1').removeClass('selected-theme');
			$('#auto_theme-2').removeClass('selected-theme');
			$('#auto_theme-3').removeClass('selected-theme');
			$('#auto_theme-4').toggleClass('selected-theme');
//			document.body.style.background = 'url('+$('#random_theme-4>img').attr('src')+')';
			theme = '#theme-4';

//			changing_img_bg(theme,true);
			$('#demo').val(theme);

			});	

			$('#auto_theme-4').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#auto_theme-4';
				 b = 'custombg/images/bg-themes/nature/nature';
					demo_live(a,b,j);

				},function(e){
					clearInterval(interval);
			});
			
		$('#random_theme-1').click(function(){
			$('#random_theme-2').removeClass('selected-theme');
			$('#random_theme-3').removeClass('selected-theme');
			$('#random_theme-4').removeClass('selected-theme');
			$('#random_theme-1').toggleClass('selected-theme');
			//document.getElementsByName('theme')
			document.body.style.background = 'url('+$('#random_theme-1>img').attr('src')+')';
			theme = '#theme-1'							
			$('#demo').val(theme);							
			});

			$('#random_theme-1').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#random_theme-1';
				 b = 'custombg/images/bg-themes/all/all';

					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									

					demo_live(a,b,j);
				
				},function(e){
					clearInterval(interval);
			});

			
		$('#random_theme-2').click(function(){
			$('#random_theme-1').removeClass('selected-theme');
			$('#random_theme-3').removeClass('selected-theme');
			$('#random_theme-4').removeClass('selected-theme');
			$('#random_theme-2').toggleClass('selected-theme');
			document.body.style.background = 'url('+$('#random_theme-2>img').attr('src')+')';
			theme = '#theme-2'
			$('#demo').val(theme);
			});
			
			$('#random_theme-2').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#random_theme-2';
				 b = 'custombg/images/bg-themes/cars/car';

					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									

					demo_live(a,b,j);
				
				},function(e){
					clearInterval(interval);
			});
			
											
		$('#random_theme-3').click(function(){
			$('#random_theme-1').removeClass('selected-theme');
			$('#random_theme-3').removeClass('selected-theme');
			$('#random_theme-4').removeClass('selected-theme');
			$('#random_theme-3').toggleClass('selected-theme');
			document.body.style.background = 'url('+$('#random_theme-3>img').attr('src')+')';
			theme = '#theme-3'
			$('#demo').val(theme);

			});					

			$('#random_theme-3').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#random_theme-3';
				 b = 'custombg/images/bg-themes/girls/girl';
									
					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									

					demo_live(a,b,j);
					
				},function(e){
					clearInterval(interval);
			});
			
		$('#random_theme-4').click(function(){
			$('#random_theme-1').removeClass('selected-theme');
			$('#random_theme-2').removeClass('selected-theme');
			$('#random_theme-3').removeClass('selected-theme');
			$('#random_theme-4').toggleClass('selected-theme');
			document.body.style.background = 'url('+$('#random_theme-4>img').attr('src')+')';
			theme = '#theme-4'
			$('#demo').val(theme);

			});					
			$('#random_theme-4').hover(function(e){
				var i = 0;
				 j =0;
				 a= '#random_theme-4';
				 b = 'custombg/images/bg-themes/nature/nature';

					j+=1;									
					$(a+'> img').attr('src',b+j+'.jpg');									

					demo_live(a,b,j);

				},function(e){
					clearInterval(interval);
			});
			
			
		changeColor('#auto-col-demo'); //demo for auto changing color
	
	
		function changeColor(id) {

			// Fade Ins
		
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

 		// more options selected using localStorage
	   $("#bg-size-opt option[value='"+ localStorage.bg_size +"']").attr('selected', 'selected');
	   $("#bg-repeat-opt option[value='"+ localStorage.bg_repeat +"']").attr('selected', 'selected');
	   $("#bg-pos-opt option[value='"+ localStorage.bg_pos +"']").attr('selected', 'selected');
	   $("#img-time option[value='"+ localStorage.img_time +"']").attr('selected', 'selected');