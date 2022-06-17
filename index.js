function isPalindrome(word) {
  // Write your algorithm here
    const arrSplit = word.split('')
    const arrReverse = arrSplit.reverse()
    const arrStr = arrReverse.join('')
  
    if(word == arrStr) {
      return(true)
    }
    else{
      return(false)
    }
  }
  
  
  


/* 
  Add your pseudocode here

  If string reads same forwards and backwards
  return true
  else 
  return false
*/

/*
  Add written explanation of your solution here
  I used .split("") method to convert the string into an array. I reversed the array using .reverse() method. 
  I then used the .join("") method to convert the reversed array into a string. If the initial string is equal to the reversed string,
  then the function isPalindrome() will return true, otherwise it will return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  
}

module.exports = isPalindrome;
