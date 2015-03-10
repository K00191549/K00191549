// JavaScript Document

$('h1').hide();
$('#div_01').hide();
$('#div_02').hide();
$('#div_07').hide();
$('#div_08').hide();
$('#jack_03').hide();
$('#beanstalk_01').hide();
$('#beanstalk_02').hide();

$(document).ready(function()
{
	$('#note').delay(7500).fadeOut("slow");
	
	$(document).scroll(function()
	{
		var top = 0;
		top = $(window).scrollTop();
		var scrollHeight = document.body.scrollHeight;
		var windowHeight = window.innerHeight;
		var scrollAmount = (top / (scrollHeight-windowHeight) * 100);
		
		//$("#value").text(top);
		$("#cloudImg_01").css('top', top*1.01+'px');	
		$("#cloudImg_02").css('top', top*1.05+'px');
		$("#cloudImg_03").css('top', -(top*0.2+'px'));
		$("#cloudImg_04").css('top', top*1.1+'px');	
		$("#cloudImg_05").css('top', -(top*1+'px'));
		$("#cloudImg_06").css('top', top*0.6+'px');
		
		// Title
		if(top >= 114 && top < 456)
		{
			$('h1').fadeIn(1500);
		}
		if(top >= 456 || top < 114)
		{
			$('h1').fadeOut(1000);
		}
		// div_01
		if(top >= 342 && top < 456)
		{
			$('#div_01').slideDown(250);
		}
		if(top < 342 || top >= 456)
		{
			$('#div_01').slideUp(250);
		}
		// div_02
		if(top >= 456 && top < 570)
		{
			$('#div_02').show("fast");
		}
		if(top >= 570 || top < 456)
		{
			$('#div_02').hide("fast");
		}
		// div_03
		if(top >= 570 && top < 684)
		{
			$('#div_03').animate({left:"60%"}, 250);	
		}
		if(top >= 684 || top < 570)
		{
			$('#div_03').animate({left: "100%"}, 250); 
		}
		// div_04
		if(top >= 684 && top < 798)
		{
			$('#div_04').animate({top:"15%"}, 250);
		}
		if(top >= 798 || top < 684)
		{
			$('#div_04').animate({top:"100%"}, 250);
		}
		// div_05
		if(top >= 798 && top < 912)
		{
			$('#div_05').animate({left:"60%"}, 250);
		}
		if(top >= 912 || top < 798)
		{
			$('#div_05').animate({left:"-50%"}, 250);
		}
		// div_06
		if(top >= 912 && top < 1026)
		{
			$('#div_06').animate({top:"15%"}, 250);
		}
		if(top >= 1026 || top < 912)
		{
			$('#div_06').animate({top:"-50%"}, 250);
		}
		// div_07
		if(top >= 1026 && top < 1140)
		{
			$('#div_07').fadeIn(250);
		}
		if(top >= 1140 || top < 1026)
		{
			$('#div_07').slideUp(250);
		}
		// div_08
		if(top >= 1140 && top < 1284)
		{
			$('#div_08').slideDown(250);
		}
		if(top >= 1284 || top < 1140)
		{
			$('#div_08').fadeOut(2000);
		}
		
		// Jack
		if(top >= 340 && top < 600)
		{
			$('#jack_01').animate({left: "15%"}, "fast");
		}
		if(top < 340)
		{
			$('#jack_01').animate({left: "-20%"}, "fast");
		}
		
		// Cow
		if(top >= 480 && top < 600)
		{
			$('#cow').animate({left: "30%"}, "slow");
		}
		if(top < 480)
		{
			$('#cow').animate({left: "-10%"}, "slow");
		}
		
		// Jack sells cow
		if(top >= 600)
		{
			$('#jack_01').animate({left: "110%"}, 1500);
			$('#cow').animate({left: "110%"}, 2000);
		}
		
		// Sad Jack
		if(top >= 760 && top < 800)
		{
			$('#jack_03').show("fast");
		}
		else
		{
			$('#jack_03').hide("slow");
		}
		
		//Beanstalk
		if(top >= 800 && top <= 900)
		{
			$('#beanstalk_01').fadeIn("fast").animate({top: "0%"});
		}
		else
		{
			$('#beanstalk_01').delay(10).animate({top: "100%"});
		}
		
		// Castle
		if(top >= 900 && top < 1040)
		{
			$('#castle').animate({top: "25%"});
		}
		else
		{
			$('#castle').animate({top: "-60%"});
		}
			
		// Giant and Jack
		if(top >= 1080 && top < 1160)
		{
			$('#jack_02').animate({left: "-20%"}, 1500);
			$('#giant').animate({left: "-20%"}, 3000);
		}
		
		// Beanstalk rotation - made with the jQueryRotate plugin
		if(top > 1200 && top < 1280)
		{
			$('#beanstalk_02').fadeIn("fast").delay(4000).rotate({angle: 0, animateTo: 90}).animate({top: "150%"});
		}
		else
		{
			$('#beanstalk_02').fadeOut("slow");
		}
	});
});