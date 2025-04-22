//Task 5;
/*"Write a loop that creates an array of functions.
Each function should log its index to the console when called.
Use closures to ensure that the correct index is logged by each function."*/

const Array= [];

for (let i = 0; i <=5; i++) { 
  Array[i]=function(){
      console.log(i);
  }
}        
Array[0]();
Array[1]();
Array[2]();
Array[3]();
Array[4]();
Array[5](); 


//Task 6;
function outerFunction(){
    let array=[];
    function addToArray(arra){
        array.push(arra);
        console.log(`Added ${arra} to array`);
    }
    function removeditem(arra){
        array.pop(`Removed ${arra} from array`);
    }  
    function listItems(){
        console.log(array);
}
return {
    addToArray:addToArray,
    removeditem:removeditem,
    listItems:listItems
};
}
const newdataitem=outerFunction();
newdataitem.addToArray(10);
newdataitem.addToArray(20);
newdataitem.addToArray(30);
newdataitem.addToArray(40);
newdataitem.addToArray(50);
newdataitem.listItems();
newdataitem.removeditem(20);
newdataitem.removeditem(30);
newdataitem.listItems();