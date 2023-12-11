//your JS code here. If required.

function incrementFun() {
	let counter=document.getElementById("counter").textContent;
let btn=document.getElementById("incrementBtn");
	            alert("Un-incremented value: " + counter);


	let newCounter=parseInt(counter)+1;
	counter.value=newCounter;
	
	
	
}