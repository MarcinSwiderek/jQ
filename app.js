var OuterVar=document.getElementById('btn-toggle');
var InnerVar=document.getElementById('my-menu');
OuterVar.addEventListener('click', function() {
	InnerVar.classList.toggle('active');
	
});