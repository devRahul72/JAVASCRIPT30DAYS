// Task 3 & 4: Mouseover and Mouseout events
const hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", function() {
    this.classList.add("highlight");
});
hoverBox.addEventListener("mouseout", function() {
    this.classList.remove("highlight");
});

// Task 5: Keydown event to log pressed key
document.getElementById("input-field").addEventListener("keydown", function(event) {
    console.log("Pressed Key:", event.key);
});
