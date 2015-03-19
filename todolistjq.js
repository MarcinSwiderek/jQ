$(document).on('ready',function(){
	
	$('#bt').on('click',function(event){
		event.preventDefault();
		$('#my-todo').append('<li>'+$('#new_item').val()+'</li>');
		$('li').on('dblclick',function(event){
			$(this).remove();
		
		});
		
	});
	
	
	
});