$(document).on('ready',function(){

	$('.click-once').one('click',function(){
		alert('you have clicked on BUTTON A');
		$('.click-once').attr('disabled','disabled');
	});
	
	$('.click-more').on('click',function(){
		alert('you have clicked on BUTTON B');
	});
	
	
	
	
});