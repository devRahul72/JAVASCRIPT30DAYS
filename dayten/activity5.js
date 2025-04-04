 // Task 9: Event delegation for list items
 document.getElementById("item-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked Item:", event.target.textContent);
    }
});

// Task 10: Event delegation for dynamically added elements
document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.classList.contains("child")) {
        console.log("Clicked Dynamic Child:", event.target.textContent);
    }
});

document.getElementById("add-child").addEventListener("click", function() {
    const newChild = document.createElement("button");
    newChild.textContent = "New Child";
    newChild.classList.add("child");
    document.getElementById("parent").appendChild(newChild);
});
