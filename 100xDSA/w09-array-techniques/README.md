<h1>Problems</h1>
<img src="/images/Problems.jpeg" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">
<img src="/images/k.png" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">
<img src="/images/l.png" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">
<img src="/images/m.png" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">
<img src="/images/n.png" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">


# Difficult Problems
## G 
- Accepted Solution : [Code](/G_Alternating_Range_Sum.py)
- Difficulty Faced: deciding how to alternate the signs
- Here’s a **concise revision note** you can keep 👇

### 🔑 Problem Pattern
Compute:
```
A[L] - A[L+1] + A[L+2] - A[L+3] + ...
```
👉 Sign depends on **starting index L**

### 💡 Key Trick (Core Idea)

Fix a **global alternating pattern**:

```
+ - + - + - ...
```
Transform array:
```
B[i] = A[i] * (+1 if i is odd else -1)   (1-based)
```

### ⚙️ Prefix Sum
Build:
```
pref[i] = sum of B[1..i]
```

### ❗ Query Handling

For query `[L, R]`:

```
ans = pref[R] - pref[L-1]
```

👉 BUT:

* If **L is odd** → answer is correct
* If **L is even** → flip sign

```
if L is even:
    ans = -ans
```
### 🧠 Key Insight
> Convert **variable sign pattern** → **fixed pattern + correction**
---

### ⏱ Complexity

* Preprocessing: `O(n)`
* Each query: `O(1)`
* Total: `O(n + q)`

---

### 🚀 Implementation Tip (0-based)
* Use:

```
if (i % 2 == 0): +A[i]
else: -A[i]
```
* For query:
```
if l % 2 == 1:
    ans = -ans
```
---

### 🔥 Takeaway
This is a classic:

> **Prefix Sum + Parity Trick**

Used when:
* Signs alternate
* Pattern depends on query start

---

## H - Print all subarrays
- Solution : [Code](/H_Print_All_Subarrays.py)
Good question — this is about both **performance and Pythonic style**.
---

### ✅ Approach 1 (slicing)

```python
for i in range(n):
    for j in range(i, n):
        print(*nums[i:j+1])
```

### ❌ Approach 2 (manual loop)

```python
for st in range(n):
    for end in range(st, n):
        for k in range(st, end+1):
            print(nums[k], end=" ")
        print()
```

---

### 🚀 1. Readability

* **Approach 1** → clean, concise, Pythonic
* **Approach 2** → more verbose, harder to read

👉 Winner: **Approach 1**

---

### ⚡ 2. Performance

#### Approach 1:

* `nums[i:j+1]` creates a **new slice (copy)** → `O(length)`
* Then printing → another `O(length)`
* Total ≈ `O(n³)` overall

#### Approach 2:

* No slicing (no extra memory)
* Just direct iteration
* Still `O(n³)`, but **slightly more efficient in memory**

👉 Winner: **Approach 2 (technically more efficient)**

---

### 🧠 3. Memory

* Approach 1 → creates temporary lists ❌
* Approach 2 → no extra space ✅

👉 Winner: **Approach 2**

---

## 🏁 Final Verdict

| Case                          | Better Choice  |
| ----------------------------- | -------------- |
| Coding interview / CP         | **Approach 2** |
| Quick debugging / readability | **Approach 1** |

---

## 💡 Best Hybrid (clean + efficient)

```python
for i in range(n):
    for j in range(i, n):
        print(*(nums[k] for k in range(i, j+1)))
```
* `*` unpacks the list comprehension method otherwise it will give a generator object
* No slicing ✅
* Clean syntax ✅

---

## 🔥 Takeaway
> **In terms of memory 3 loops are better than slicing**
> Slicing looks clean but **costs extra time + memory**
> Nested loops look ugly but are **more optimal**

---

## Sum of all sub-arrays in O(N) TC:
- See the pattern of each subarray what's the number of occurrence of each number.
```
1 2 3 4

1
1 2
1 2 3
1 2 3 4

2
2 3
2 3 4

3 
3 4

4 

```
---
```
1 -> 4 times (id+1)*(n-id)
2 -> 3 before, 3 after
3 -> 
```

Your intuition is correct: **O(n²) is impossible here**. You must derive an **O(n)** solution.

This is a classic transformation problem:

> Instead of generating subarrays → **count contribution of each element**

---

### 1. Key Insight (Critical Shift)

Brute Force thinking:

> “Generate all subarrays → sum them”

This leads to O(n²).

Instead think:

> “How many subarrays include a given element?”

---

### 2. Contribution Technique

Consider element at index `i`:

#### How many subarrays include `a[i]`?

* Left choices: `i + 1`
* Right choices: `n - i`

So total subarrays including `a[i]`:

$
(i + 1)(n - i)
$

---

### 3. Final Formula

Each element contributes:
$
a[i] \times (i + 1) \times (n - i)
$

So total answer:

$
\sum_{i=0}^{n-1} a[i] \cdot (i+1)(n-i)
$

---

### 4. Why This Works (Important Understanding)

Each subarray is defined by:

* starting index `L`
* ending index `R`

For a fixed `i`:

* `L` can be from `0 → i` → `(i+1)` choices
* `R` can be from `i → n-1` → `(n-i)` choices

So every subarray that contains `i` is counted exactly once.

---

### 5. Implementation (Optimal O(n))

```python
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    nums = list(map(int, input().split()))

    total = 0
    for i in range(n):
        total += nums[i] * (i + 1) * (n - i)

    print(total)

if __name__ == "__main__":
    main()
```

---

### 6. Complexity

* Time: **O(n)**
* Space: **O(1)**

---

### 7. Example Walkthrough

For:

```
[1, 2, 3]
```

| i | a[i] | (i+1) | (n-i) | Contribution |
| - | ---- | ----- | ----- | ------------ |
| 0 | 1    | 1     | 3     | 3            |
| 1 | 2    | 2     | 2     | 8            |
| 2 | 3    | 3     | 1     | 9            |

Total = 3 + 8 + 9 = **20**

---

#### 8. What You Should Learn (Important)#
This is a **pattern you must master**:

#### When:
* Problem asks about **all subarrays**
* Constraints forbid O(n²)

#### Think:

> “Contribution of each element”
---

#### 9. General Pattern Recognition

This exact idea appears in:
* Sum of subarrays
* Sum of subarray minimums
* Sum of subarray maximums
* Contribution in combinatorics

---

### Final Conclusion
* Your reasoning is correct: **must be O(n)**
* The correct approach: **contribution technique**
* This is a **high-frequency interview and contest pattern**

---

## Last Problem: Max sub array sum of size k : Sliding Window
[Code](/N_Maximum_Subarray_Sum_of_Size_K.py)
## Sliding Window — Revision Note (Fixed Size)

### 1. When to Use

Use **Sliding Window** when:

* Problem involves **contiguous subarrays / substrings**
* Window size is **fixed (exactly K)** or can be adjusted
* Need **max / min / count / sum efficiently**
* Constraints are large (e.g., ( n \le 10^5 ))

---

## 2. Core Idea

Instead of recomputing values for every subarray:

> Reuse previous computation by **adding incoming element and removing outgoing element**

---

## 3. Fixed Size Window (This Problem)

Goal:

> Maximum sum of subarray of size ( K )

### Naive Approach

[
O(n \cdot k)
]
Recompute sum every time → inefficient

---

### Optimal Approach (Sliding Window)

Maintain a running sum:

[
\text{newSum} = \text{oldSum} - \text{left element} + \text{right element}
]

---

## 4. Algorithm Steps

1. Compute sum of first window ([0 \dots k-1])
2. Initialize `maxSum`
3. Slide window from index `k → n-1`

   * Add new element
   * Remove old element
   * Update answer

---

## 5. Code Template

```python
currSum = sum(arr[:k])
maxSum = currSum

for i in range(k, n):
    currSum += arr[i]      # add new
    currSum -= arr[i-k]    # remove old
    maxSum = max(maxSum, currSum)
```

---

## 6. Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 7. Visualization

Window shifts like:

```
[a b c] d e
  [b c d] e
    [c d e]
```

Each step:

* Remove left
* Add right

---

## 8. Key Insight

You are not recalculating → you are **updating**

---

## 9. When NOT to Use This Directly

* If window size is **not fixed**
* If constraints depend on conditions (then use variable window / two pointers)

---

## 10. Pattern Classification (Important)

| Problem Type  | Technique      |
| ------------- | -------------- |
| All subarrays | Contribution   |
| Fixed size K  | Sliding Window |
| Variable size | Two Pointers   |

---

## Final Summary

> Sliding Window transforms an (O(n \cdot k)) brute-force into (O(n)) by reusing previous computations instead of recomputing from scratch.

This is a **must-master pattern** for high-level problem solving.
