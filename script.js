//your JS code here. If required.
let counter=0;
let pElement=document.getElementById("counter");
let buttonElement=document.getElementById("incrementBtn");
function incrementFun() {
	buttonElement.style.backgroundColor="blue";
	counter++;
	pElement.innerText=counter.toString();
	alert(`${counter++}`)
	
}



    