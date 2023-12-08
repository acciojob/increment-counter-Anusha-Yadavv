//your JS code here. If required.

function incrementFun() {
	let counter=document.getElementById("counter").innerHTML;
let btn=document.getElementById("incrementBtn");

	let newCounter=parseInt(counter)+1;
	counter.innerHTML=newCounter;
	
	
}