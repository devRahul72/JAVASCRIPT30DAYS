 // Task 5: Keydown event to log pressed key
 document.getElementById("input-field").addEventListener("keydown", function(event) {
    console.log("Pressed Key:", event.key);
});

// Task 6: Keyup event to display input value
document.getElementById("input-field").addEventListener("keyup", function() {
    document.getElementById("input-display").textContent = this.value;
});
