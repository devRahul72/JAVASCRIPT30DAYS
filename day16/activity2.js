/*"Write a function that generates unique IDs.
Use a closure to keep track of the last generated ID, and increment it on every function call*/
//Test 3;
function outerFunction(){
    let lastID=0;
    function innerFunction(){
        lastID++;
        return lastID;
    }
    return innerFunction;
}
const newtemporry=outerFunction();
console.log(newtemporry());
console.log(newtemporry());
/*"Create a closure that captures the user's name and returns a function that greets the user using their name."*/
//Test 4

function outeFunction(){
  let name= "Rahul";
  function innerFunction(){
    return name;
}
return innerFunction;
}
const newtemprry=outeFunction();  
console.log(newtemprry()); 