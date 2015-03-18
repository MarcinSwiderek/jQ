var input=document.getElementById('tekst');
var saved=document.getElementById('save');

saved.addEventListener('click',function(event) {
	window.localStorage.setItem('wpisany tekst',input.value);
	
});

input.value=window.localStorage.getItem('wpisany tekst');

