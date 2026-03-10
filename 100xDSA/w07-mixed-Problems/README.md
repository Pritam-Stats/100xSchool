# Problems
<img src="Problems.jpeg" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">


## F - String Compression

**Core Idea:**
Compress **consecutive repeated characters** in a string.
- If a character appears **more than once consecutively**, replace it with: **character + count**
- If it appears **once**, keep it as it is.
  
```
Input:  aaabbddccc
Groups: aaa bb dd ccc
Output: a3b2d2c3
```

```
Input: aba
Output: aba
```
- No consecutive reps
#### Key Insight

This is a **Run-Length Encoding (RLE)** problem.
We must count **consecutive groups**, **not total frequency**.

❌ Wrong idea: Count total characters using dictionary

✔️ Correct idea: Scan string and count consecutive characters

---

### Algorithm

1. Start `count = 1`
2. Traverse string from `i = 1`
3. If `s[i] == s[i-1]`
   count += 1 
4. Otherwise
   * append previous character
   * append count if `count > 1`
   * reset `count = 1`
5. Handle the **last group separately**

---

### Complexity
Time  : O(n)
Space : O(n)

- Pattern Recognition Tip

- Whenever you see: "consecutive occurrences"
Think immediately:
```
Run Length Encoding (RLE)
or
Two-pointer / group counting
```
