$(document).on('ready',function(){
	$('.load-more').on('click', function(e){
		e.preventDefault();
		
	$.ajax({
		url:"ajaxex.json",
		dataType:"json"
	})
	.done(function(data){
		console.log("success",data);
		
		$('h3').text(data.address.continent);
		$('h3').append("<br>").append(data.address.country);
		$('h3').append("<br>").append(data.address.country_code);
	})
	.fail(function(){
		console.log("error");
	});
	});
	
	
});