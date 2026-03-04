/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    //if rev(str) == str true
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.length === 0 || str.length === 1) {return true}

    
    let l = 0;
    let r = str.length -1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
}
console.log(isPalindrome('A man, a plan, a canal. Panama'))
module.exports = isPalindrome;