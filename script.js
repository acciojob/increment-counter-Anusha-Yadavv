//your JS code here. If required.

function incrementFun() {
	let counterElement=document.getElementById("counter");
	let counterValue=counterElement.textContent;
	
	            alert("Un-incremented value: " + counterValue);


	let newCounter=parseInt(counterValue)+1;
	counterValue.textContent=newCounter;
	
	
	
}