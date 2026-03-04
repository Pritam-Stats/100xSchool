/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let strList = str.toLowerCase().split('');

    let count = 0;
    for (ch of strList) {
        if (vowels.includes(ch)) { count += 1}
    }
    return count;
}

// console.log(countVowels("aefAEf"));

module.exports = countVowels;