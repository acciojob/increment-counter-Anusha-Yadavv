//your JS code here. If required.

function incrementFun() {
	let counter=document.getElementById("counter");
	let counterValue=counter.textContent;
	
	            alert("Un-incremented value: " + counterValue);


	let newCounter=parseInt(counterValue)+1;
	counterValue.value=newCounter;
	
	
	
}