 //test 5;
 //Write a recursive function that reverses a string. Log the results in the console for different test cases.
    function reverseString(str) {
        
        if (str.length <= 1) {
          return str;
        } else {
          return reverseString(str.slice(1)) + str[0];
        }
      }
      

      console.log(reverseString("hello"));     
      console.log(reverseString("world"));     
      console.log(reverseString("a"));           
      console.log(reverseString(""));           
      console.log(reverseString("12345"));   

      //Test 6;
      // Write a recursive function that checks if a string is a palindrome. Log the results in the console for different test cases.
      function isPalindrome(str, start = 0, end = str.length - 1) {
        
        if (start >= end) {
          return true;
        }
      
        
        if(str[start] !== str[end])
            {
          return false;
        }
      

        return isPalindrome(str, start + 1, end - 1);
      }
      
      const testStrings = ["madam", "racecar", "hello", "level", "a", ""];
      
      for (let i = 0; i < testStrings.length; i++) {
        console.log(isPalindrome( testStrings[i]));
      }
      
      