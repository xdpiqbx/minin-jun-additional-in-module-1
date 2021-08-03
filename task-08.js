const isPalindrome = (word) => {
  return word === word.split("").reverse().join("") ? true : false;
};

console.log({
  racecar: isPalindrome("racecar"), // true
  programmer: isPalindrome("programmer"), // false
});
