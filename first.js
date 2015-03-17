/*
function printLarger(){
	var a=parseInt(prompt("Podaj pierwszą liczbę")),
		b=parseInt(prompt("Podaj drugą liczbę"));
	a>b ? console.log(a) : console.log(b);
}
var result=printLarger();
*/
/*
function Modulo() {
	var c=parseInt(prompt("Podaj pierwszą liczbę")),
	    d=parseInt(prompt("Podaj drugą liczbę"));
	return c%d;
}
console.log(Modulo());
*/
/*
var tablica=[4,6,1,731,31,66,2];
function Minimum(tablica) {
	var i,min=tablica[0];
	
	for(i=0;i<tablica.length;i++) {
		if(tablica[i]<min) {
			min=tablica[i];
		}
	}
	return min;
}
console.log(Minimum(tablica)); 
*/
/*
var myColor=["Red","Green","White","Black"];

myColor.join(',');
myColor.join('+');
*/
/*
var num=window.prompt();
var str=num;
var result=[str[0]];

for(var x=1;x<str.length;x++) {
   console.log(str[x]+'vs ' + str[x-1]);
 
	   if(str[x]%2===0 && str[x-1]%2===0) {
		   result.push('-'+str[x]);
	   
       }
	   else {
		   result.push(str[x]);
	   }
}

console.log(result.join(''));
*/
/*
var ATM= (function () {
	var balance=10000;
	var pass=false;
	return {
		setPassword: function(newPass) {
			if(pass) {
				console.log('Error');
			}
			else{
				pass=newPass;
			}
		},
		getBalance: function() {
			return balance;
		},
		deposit:function(depositVal) {
			balance+=depositVal;
			return balance;
		}
	};})();
*/
	
/*
var adres=prompt("Podaj adres do którego przekierować");
document.location.href=adres;
*/
/*
document.images.length; // liczba obrazków
*/
/*
document.querySelectorAll('div.clear');
document.querySelectorAll('div').length;
document.querySelector('.social');
document.querySelectorAll('.social');
 */










