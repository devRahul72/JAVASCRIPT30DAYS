//test 9;
// add event listener to the button and change the text;

document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("myParagraph").textContent = "Yeh naya text hai!";
});

//test 10;
//add mouseover and mouseout event listener to the box change color on touch the box of maouse arrow and change the color;
let box = document.getElementById("box");

        box.addEventListener("mouseover", function() {
            box.style.borderColor = "red";
        });
        box.addEventListener("mouseout", function() {
            box.style.borderColor = "black";
        });