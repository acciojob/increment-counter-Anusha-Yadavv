//your JS code here. If required.
let counter=0;
let pElement=document.getElementById("counter");
let buttonElement=document.getElementById("incrementBtn");
function incrementFun() {
	buttonElement.style.backgroundColor="blue";
	pElement.innerText=counter+1;
	alert(`${counter++}`)
	
}



    