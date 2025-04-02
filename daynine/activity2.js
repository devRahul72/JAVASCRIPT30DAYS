// test 3 ;
// create a new div and add the some text in the body;
function addNewDiv() {
    
    let newDiv = document.createElement("div");

    newDiv.className = "newDiv";

    newDiv.textContent = "Yeh ek naya dynamically added div hai!";

    document.body.appendChild(newDiv);
}
//test 4;
// create a new list and add the some text in the body;
function addNewListItem() {
    
    let newListItem = document.createElement("li");

    newListItem.textContent = "Naya Item";


    document.getElementById("myList").appendChild(newListItem);
}