$(document).on('ready',function(){
	$('.box').first().animate( {
		opacity:"1",
		marginTop:"200px"
	},6000,function() {
		$('.box').first().next().animate( {
			opacity:"1",
			marginTop:"200px"
		},6000,function(){
			$('.box').last().animate( {
				opacity:"1",
				marginTop:"200px"
			},6000,function(){
				alert('done');
			});
		});
	});
	
	
	
	
});