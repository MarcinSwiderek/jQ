var myList=document.getElementById('my-todo'),
	myForm=document.getElementById('my-form'),
	myInput=document.getElementById('new_item');

myForm.addEventListener('click',function(event) {
	
	event.preventDefault();
	//create list item
	var listItem=document.createElement("li"),
		listItemText=document.createTextNode(myInput.value);
	//append text to list item
	listItem.appendChild(listItemText);
	
	//append list item to menu 
	myList.appendChild(listItem);
	//clear inputValue
	
	myInput.value='';
});