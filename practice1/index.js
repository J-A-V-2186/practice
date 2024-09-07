function isPalindrome(string) {
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    if (
      string[i].charCodeAt(0) !== 32 &&
      string[i].charCodeAt(0) !== 44 &&
      string[i].charCodeAt(0) !== 46
    ) {
      arr.push(string[i]);
    }
  }
  //code above gets rid of all spacese in the given string
  //and it pushes each seperate letter into arr for evaluation
  //further along the code.

  const word = arr.toString().toLowerCase();
  const wordReverse = arr.reverse().toString().toLowerCase();

  if (word === wordReverse) {
    return true;
  } else {
    return false;
  }
}

//GTP solution

function isPalindrome(string) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  const normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove all non-alphanumeric characters

  // Reverse the normalized string
  const reversedString = normalizedString.split("").reverse().join("");

  // Compare the normalized string with its reverse
  return normalizedString === reversedString;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
