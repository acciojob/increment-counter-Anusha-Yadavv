//your JS code here. If required.

function incrementFun() {
	let counter=document.getElementById("counter");
	let counterValue=counter.value;
	
	            alert("Un-incremented value: " + counter);


	let newCounter=parseInt(counter)+1;
	counter.value=newCounter;
	
	
	
}