var el=document.getElementById("my-button");
el.addEventListener('click', function(event) {
	alert('click'); 
	console.log(event);
	if (event.screenX<30) {
		console.log("<30");
	}
	if(event.shiftKey===true) {
		console.log("shift");
	}

});

