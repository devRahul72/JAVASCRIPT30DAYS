//test 5;
//remove the element with id myElement;
function removeElement() {
    let element = document.getElementById("myElement");
    if (element) {
        element.remove(); // Element ko remove karna
    }
}
// test 6;
//remove the last child of the list;
function removeLastChild() {
    let list = document.getElementById("myList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}