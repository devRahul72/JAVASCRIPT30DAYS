 // Task 1: Button click event to change paragraph text
 document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("para").textContent = "Text Changed!";
});
//Task 2: Image double-click event to toggle visibility
        document.getElementById("image").addEventListener("dblclick", function() {
            this.style.display = this.style.display === "none" ? "block" : "none";
        });

