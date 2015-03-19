$(document).on('ready',function(){
	
	$('span').on('click',function(){
		
		$(this).css('background',$('#sel').val());
	});
	$('span').on('dblclick',function(){
		$(this).css('background','white');
	});
	
	
});