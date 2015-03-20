
$(document).on('ready',function(){
	
	var time=0;
	var score=0;
	setInterval(function(){
		time+=1;
		$('#time').text(time);
		if(time===60) {
			alert("!!!111!!jeden!!jeden Twoj wynik to : "+score);
			location.reload();
		}
		
	},1000);
	
	
	setInterval(function(){
		var random=Math.floor(Math.random()*$('span').length);
		$('span').removeClass('active');
		$('span').eq(random).addClass('active');	
		
	},1000);
	
	$('span').on('click', function(){
		if($(this).hasClass('active')) {
			
		score+=1;
		$('#score').fadeOut(400,function(){
			$('#score').text(score).fadeIn();
		});
		$(this).removeClass('active');
		}					
	});
	
	
	
});