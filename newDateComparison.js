var pData=prompt("Podaj datę w formacie YYYY-MM-DD")
var pRok=pData.substring(0,4);
var pMiesiac=pData.substring(5,7);
var pDzien=pData.substring(8,10);
console.log(pRok);

var date=new Date();
var rRok=date.getFullYear();
var rMiesiac=date.getMonth()+1;
if(rMiesiac<10)
	rMiesiac="0"+rMiesiac;

var rDzien=date.getDate();
if(rDzien<10)
	rDzien="0"+rDzien;
var rData=rRok+"-"+rMiesiac+"-"+rDzien;

if(pRok>rRok) {
	alert("future");
}
else if(pRok<rRok) {
	alert("past");
}
else {
	if(pMiesiac>rMiesiac) {
		alert("future");
	}
	else if(pMiesiac<rMiesiac){
		alert("past");
	}
	else {
		if(pDzien>rDzien) {
			alert("future");
		}
		else if(pDzien<rDzien) {
			alert("past");
		}
		else {
			alert("current");
		}
	}
}

		
		
		
		