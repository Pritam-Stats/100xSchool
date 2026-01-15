- Problems shared by TA Sumana @sumana10l
- Problems Link: [JS Problems](https://gist.github.com/sumana10l/960f66df5dd1b137fbfecd4005acb65b)

## Questions
Here’s a comprehensive list with test cases for all 45 questions:

1. **Print Fibonacci Series** [Solution](./1-Fibonacci.js)
   - **Input**: `printFibonacciSeries(5)`
   - **Output**:
     ```
     Fibonacci Series:
     0
     1
     1
     2
     3
     ```

2. **Round off a Number to Next Multiple of 5** [Solution](./2-roundNumToNext5x.js)
   - **Input**: `roundToNextMultipleOf5(23)`
   - **Output**: `25`

3. **Find the Largest 3 Numbers** [solution](./3-findLargest3Nums.js)
   - **Input**: `findLargest3Numbers([45, 23, 78, 12, 90, 67, 34])`
   - **Output**: `[90, 78, 67]`

4. **Find the Area of a Circle** [Solution](./4-circle-area.js)
   - **Input**: `findAreaOfCircle(5)`
   - **Output**: `78.54` (using π ≈ 3.14)

5. **Find the Repetitive Words in a String**
   - **Input**: `findRepetitiveWords("The quick brown fox jumps over the lazy dog")`
   - **Output**: `['the']`

6. **Find the Length of a String**
   - **Input**: `findLengthOfString("Hello, world!")`
   - **Output**: `13`

7. **Find the Number of Vowels in a String**
   - **Input**: `findNumberOfVowels("The quick brown fox")`
   - **Output**: `5`

8. **Check if a Number is Perfect**
   - **Input**: `isPerfectNumber(28)`
   - **Output**: `true`

9. **Check if a Number is Armstrong**
   - **Input**: `isArmstrongNumber(153)`
   - **Output**: `true`

10. **Find the Largest of Three Numbers**
    - **Input**: `findLargestOfThreeNumbers(5, 7, 3)`
    - **Output**: `7`

11. **Count Number of Characters in a Given String**
    - **Input**: `countCharacters("cherrish every beautiful day in your life")`
    - **Output**: `{ c: 2, h: 2, e: 5, r: 4, i: 4, s: 1, v: 1, y: 1, b: 1, u: 2, t: 1, f: 1, l: 1, d: 1, a: 1, o: 1, n: 1 }`

12. **Count Number of Words in a Given String**
    - **Input**: `countWords("cherrish every beautiful day in your life")`
    - **Output**: `{ cherrish: 1, every: 1, beautiful: 1, day: 1, in: 1, your: 1, life: 1 }`

13. **Search for a Person in an Array of Objects**
    - **Input**: `searchFunction([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }])`
    - **Output**: `{ name: 'Bob', age: 30 }`

14. **Count Number of Properties in an Object**
    - **Input**: `Object.keys({ a: 1, b: 2, c: 3 }).length`
    - **Output**: `3`

15. **Iterate Over an Array of Objects**
    - **Input**: `iterateFunction([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }])`
    - **Output**: `['John : 20', 'Jane : 25']`

16. **Delete a Property from an Object**
    - **Input**: `delete { a: 1, b: 2, c: 3 }.c`
    - **Output**: `{ a: 1, b: 2 }`

17. **Filter Library Records with Reading Status False**
    - **Input**: `filterReadingStatus([{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }])`
    - **Output**: `[ { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false } ]`

18. **Filter Library Records by Author Name**
    - **Input**: `filterAuthorName([{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }])`
    - **Output**: `[ { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false } ]`

19. **Filter Library Records with Author's Name Starting with 'S'**
    - **Input**: `filterAuthorNameChar([{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }])`
    - **Output**: `[ { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true } ]`

20. **Remove Duplicate Values from an Array**
    - **Input**: `unique(['apple', 'banana', 'orange', 'banana', 'grape', 'apple'])`
    - **Output**: `['apple', 'banana', 'orange', 'grape']`

21. **Generate Employee IDs**
    - **Input**: `generateEmployeeId()`
    - **Output**: `['E0001', 'E0002', ..., 'E0020']`

22. **Count Number of Characters in a Given String**
    - **Input**: `countCharacters("cherrish every beautiful day in your life")`
    - **Output**: `{ c: 2, h: 2, e: 5, r: 4, i: 4, s: 1, v: 1, y: 1, b: 1, u: 2, t: 1, f: 1, l: 1, d: 1, a: 1, o: 1, n: 1 }`

23. **Find the Largest 3 Numbers in an Array**
    - **Input**: `findLargest3Numbers([1, 7, 3, 9, 5])`
    - **Output**: `[9, 7, 5]`

24. **Find the Area of a Circle Given Its Radius**
    - **Input**: `findAreaOfCircle(5)`
    - **Output**: `78.54` (using π ≈ 3.14)

25. **Find Repetitive Words in a String**
    - **Input**: `findRepetitiveWords('the quick brown fox jumps over the lazy dog')`
    - **Output**: `['the']`

26. **Find the Length of a String**
    - **Input**: `findLengthOfString('Hello, world!')`
    - **Output**: `13`

27. **Find the Number of Vowels in a String**
    - **Input**: `findNumberOfVowels('The quick brown fox')`
    - **Output**: `5`

28. **Check if a Number is Perfect**
    - **Input**: `isPerfectNumber(28)`
    - **Output**: `true`

29. **Check if a Number is Armstrong**
    - **Input**: `isArmstrongNumber(153)`
    - **Output**: `true`

30. **Find Largest of Three Numbers**
    - **Input**: `findLargestOfThree(5, 7, 3)`
    - **Output**: `7`

31. **Filter Library Records by Reading Status**
    - **Input**: `filterReadingStatus([{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }])`
    - **Output**: `[ { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false } ]`

32. **Filter Library Records by Author Name**
    - **Input**: `filterAuthorName([{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }])`
    - **Output**: `[ { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false } ]`

33. **Filter Authors Starting with 'S'**
    - **Input**: `filterAuthorNameChar([{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }])`
    - **Output**: `[ { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true } ]`

34. **Generate Unique Random Numbers**
    - **Input**: `generateUniqueRandomNumbers(100, 5)`
    - **Output**: `[23, 45, 12, 67, 89]`

35. **Transform

 Array Elements**
    - **Input**: `transformArray([1, 2, 3])`
    - **Output**: `['Element: 1', 'Element: 2', 'Element: 3']`

36. **Print Even Numbers Up to a Limit**
    - **Input**: `printEvenNumbers(20)`
    - **Output**:
      ```
      2
      4
      6
      8
      10
      12
      14
      16
      18
      20
      ```

37. **Generate Unique Random Numbers**
    - **Input**: `generateUniqueRandomNumbers(100, 5)`
    - **Output**: `[23, 45, 12, 67, 89]`

38. **Transform Array Elements**
    - **Input**: `transformArray([1, 2, 3])`
    - **Output**: `['Element: 1', 'Element: 2', 'Element: 3']`

39. **Print Even Numbers Up to a Limit**
    - **Input**: `printEvenNumbers(20)`
    - **Output**:
      ```
      2
      4
      6
      8
      10
      12
      14
      16
      18
      20
      ```

40. **Generate Unique Random Numbers** [Solution](./40-gen-RandomNos.js)
    - **Input**: `generateUniqueRandomNumbers(100, 5)`
    - **Output**: `[23, 45, 12, 67, 89]`

41. **Print Odd Numbers Up to a Limit** [Solution](./41-printOdds.js)
    - **Input**: `printOddNumbers(15)`
    - **Output**:
      ```
      1
      3
      5
      7
      9
      11
      13
      15
      ```

42. **Count Characters in a String (No Spaces)** [Solution](./42-count-Chars-in-str.js)
    - **Input**: `countCharacters("test string")`
    - **Output**: `{ t: 3, e: 1, s: 2, r: 1, i: 1, n: 1, g: 1 }`

43. **Count Words in a String** [Solution](./43-countWords.js)
    - **Input**: `countWords("one two three")`
    - **Output**: `{ one: 1, two: 1, three: 1 }`

44. **Search for an Item in an Array** [Solution](./44-searchInArr.js)
    - **Input**: `searchFunction([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }, { name: 'Alice', age: 30 }])`
    - **Output**: `undefined` (since no person with the name 'Bob')

45. **Generate Employee IDs** [Solution](./45-generateEmpID.js)
    - **Input**: `generateEmployeeId()`
    - **Output**: `['E0001', 'E0002', ..., 'E0020']`

