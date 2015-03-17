var Buttons=document.querySelectorAll('.btn--delete');

for(var i=0;i<Buttons.length;i++) {
	Buttons[i].addEventListener('click', function(event) {
		event.target.parentNode.remove()
	});	
	
}