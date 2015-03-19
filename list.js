$(document).on('ready',function(){
	$('li').each(function(index){
		$(this).text('text '+(index+1));
		if(index<5) {
			$(this).prepend('<span>Span</span> ');
			$(this).find('span').css('background','red');
		}
		else {
			$(this).append(' <span>Span</span>');
			$(this).find('span').css('background','blue');
			
		}
	
	
	
	});
	
	
	
	
	
});