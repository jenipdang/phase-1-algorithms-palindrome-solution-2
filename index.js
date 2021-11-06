function isPalindrome(word) {
  // Write your algorithm here
//   iterate from the beginning to the middle
// racecar 7 / 2 == 3.5
// aaaaaa 6 /3 == 3
for (let i = 0; i < word.length / 2; i++) {
//   check each letter to the corresponding letter from the end
  const j = word.length - 1 - i
  const startChar = word[i]
  const endChar = word[j]
//     if any letters don't match, return false
  if (word[i] !== word[j]) return false
  }
//  return true
return true
}

/* 
  Add your pseudocode here
  That means if the first letter is 
  the same as last letter, and the scond letter is the same as the scond to last leter, etc. 
  until we reach the middle, return true.

  iterate from the beginning to the middle
   check each letter to the corresponding letter from the end
     if any letters don't match, return false

  return true

*/

/*
  Add written explanation of your solution here
  Make a function that returns true if a word is a palindrome. That means if the first letter is 
  the same as last letter, and the scond letter is the same as the scond to last leter, etc. 
  until we reach the middle, return true.

  abba
  ^  ^
   ^^
   true

   robbot
   ^    ^
   false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
