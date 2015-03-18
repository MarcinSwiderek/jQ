var showTime;
showTime=setInterval(function () {
	var date=new Date();

	var day=date.getDate();
	var month=date.getMonth();
	if(month<10) {
		month="0"+month;
	}
	var year=date.getFullYear();
	var hours=date.getHours()
	if(hours<10) {
		hours="0"+hours;
	}
	var minutes=date.getMinutes();
	if(minutes<10) {
		minutes="0"+minutes;
	}
	var seconds=date.getSeconds();
	if(seconds<10) {
		seconds="0"+seconds;
	}
	console.log(day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds)
}, 10000);
