$(document).on('ready',function(){
	$('td').css({
		'height': '50px',
		'width' : '50px',
		'text-align': 'center'
	});
	$('td:even').css('background','red');
	$('td:odd').css('background','yellow');
	$('.title').css({
		'font-weight' :'bold',
		'font-size': '30px'		
	});
	$('.footer').css('font-style','italic');
	



});
