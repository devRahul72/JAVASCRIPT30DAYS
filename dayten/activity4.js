// Task 7: Form submit event to log data
document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form Data:", new FormData(this));
});

// Task 8: Dropdown change event to display selected value
document.getElementById("dropdown").addEventListener("change", function() {
    document.getElementById("selected-value").textContent = "Selected: " + this.value;
});
