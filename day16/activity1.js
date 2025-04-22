//TEST;
// create a outer function and an inner function
// the inner function should be able to access the outer function's variable
// function outerFunction() {
//     let outerVar = "Hello from outer function!";
  
//     function innerFunction() {
//       console.log(outerVar);
//     }
  
//     return innerFunction;
//   }
  
//   const closureFunc = outerFunction();
//   closureFunc();
  
  // function outerfucntion() {
  //   let outervar="hy i am frontdeveloper";

  //   function innerFunction(){
  //     console.log(outervar);
  //   }
  //    return innerFunction;


  // }5
  // const newtemporry= innerFunction();
  // newtemporry();
  //test 2;
  // create a function that returns another function and count the number of times it is called;
  //   function createCounter() {
  //       let count = 0;
        
  //       function increment() {
  //         count++;
  //         console.log("Counter incremented!");
  //       }    
  //       function getCount() {
  //        return count;
  //      }
       
  //  return {
  //        increment: increment,
  //        getCount: getCount
  //      };
  //    }
    
  //    const counter = createCounter();
     
  //    counter.increment();
  //    counter.increment();
  //    console.log(counter.getCount());
    
  function outerfucntion(){
    let counter=0;
    function innecrement(){
      counter++;
    }
    function getCount(){
      return counter;
    }
    return {
      increment:innecrement,
      getCount:getCount
    };
     
  }
  const hynewaby=outerfucntion();
  hynewaby.increment();
  hynewaby.increment();
  console.log(hynewaby.getCount());