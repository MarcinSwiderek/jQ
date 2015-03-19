$(document).on('ready',function(){
	$('div').css({
		'border-style':'solid',
		'border-color':'black',
		'border-width':'1px',
		'margin-bottom':'2px'
	});
	
	var $divs=$('div');
	$divs.first().children().css('background-color','#87C540');
	$divs.next().children().css('background-color','#87C540');
	$divs.first().css('font-weight','bold');
	$divs.nextAll().css('font-weight','bold');
	$divs.first().next().next().next().css('font-weight','normal');
	$divs.first().next().next().next().children().last().css('background-color','red');
	
});