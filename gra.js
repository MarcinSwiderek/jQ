
$(document).on('ready',function(){
	
	var time=0;
	var score=0;
	setInterval(function(){
		time+=1;
		$('#time').text(time);
	},1000);
	
	
	setInterval(function(){
		var random=Math.floor(Math.random()*$('span').length);
		$('span').removeClass('active');
		$('span').eq(random).addClass('active');	
		
	},2000);
	
	$('span').on('click', function(){
		if($(this).hasClass('active')) {
			
		score+=1;
		$('#score').text(score);
		$(this).removeClass('active');
		}				
	});
	
});