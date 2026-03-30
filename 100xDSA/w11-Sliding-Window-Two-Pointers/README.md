<div style="display: flex; justify-content: center; margin-top: 10px;">
  <span style="
    background-color: black;
    box-shadow: 0 0 40px #ec582b;
    font-family: monospace;
    font-size: 38px;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  ">
    Problems
  </span>
</div>

<img src="Problems.jpeg" alt="Your ̌long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto; margin-top: 15px; margin-bottom: 15px">


<div style="display: flex; justify-content: center; margin-top: 10px;">
  <span style="
    background-color: black;
    box-shadow: 0 0 40px #12a3e8;
    font-family: monospace;
    font-size: 38px;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  ">
    Official Solutions
  </span>
</div>


---
# B - COUNT AND RETURN NUMBER OF VOWELS IN EACH SUBSTRING
- [Code](/B_Count_Vowels.py)

Yes—your solution is optimal for this problem.

Time Complexity
	•	First window: O(k)
	•	Sliding over remaining n - k elements: O(n - k)
	•	Total: O(n)

Each character is:
	•	Added once
	•	Removed once
So the work per element is constant.

⸻

Space Complexity
	•	Output array: O(n - k + 1)
	•	Auxiliary: O(1) (only a few variables + small vowel set)

⸻

Why this is optimal

You are computing vowel count in every substring of length k.

Lower bound reasoning:
	•	There are n - k + 1 windows → you must at least “touch” each window
	•	So Ω(n) is unavoidable

Your approach matches this lower bound → asymptotically optimal

⸻

Can it be improved further?

Not in Big-O terms. Only constant factor optimizations are possible:

1. Remove lambda (micro-optimization)

if s[i] in v:

2. Avoid list ans if not required
If printing immediately is allowed:

print(cnt, end=' ')

3. Bitmask trick (advanced, mostly academic here)
Map vowels to a bitmask for ultra-fast checks, but in Python:
	•	set lookup is already highly optimized
	•	Bitmask won’t give meaningful gains

⸻

Key insight (important for interviews/contests)

This is a textbook case of:

Fixed-size sliding window + incremental update

Pattern:

new_window = old_window 
           + incoming_element 
           - outgoing_element

You applied it correctly:

cnt += isVowel(s[i])
cnt -= isVowel(s[i-k])


⸻

Final assessment
	•	Algorithm choice: Correct
	•	Complexity: Optimal (O(n))
	•	Implementation: Correct after fix
	•	Optimization level: Already near best possible
