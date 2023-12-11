//your JS code here. If required.

function incrementFun() {
	const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Initial counter value
    let counterValue = 0;

    // Function to handle button click
    function handleIncrementClick() {
      // Display the un-incremented value in an alert
      alert(`Un-incremented value: ${counterValue}`);

      // Increment the counter value
      counterValue++;

      // Update the counter element
      counterElement.textContent = counterValue;
    }

    // Attach the click event listener to the button
    incrementBtn.addEventListener('click', handleIncrementClick);
	
	
	
}