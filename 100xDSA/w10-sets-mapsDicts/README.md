<h1>Problems</h1>
<img src="/images/w10-set-maps.jpeg" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">

<img src="/images/w9-l-m.png" alt="Your long page image" style="max-width: 100%; border-radius: 10%; display: block; margin-left: auto; margin-right: auto;">

# Learnings and Solution Discussions

# Hashing, Sets, and Dictionaries — Revision Notes
<p align="right">March 23, 2026</p>

## 1. Core Concept: Key → Value Mapping

* Fundamental idea: store and retrieve data using a **key**.
* Naive approach: list of pairs → search takes **O(n)**.
* Goal: achieve **O(1)** lookup.

---

## 2. Hashing (First Principles)

* A **hash function** converts a key into an integer.

* That integer is mapped to an index in an array:

  index = hash(key) % table_size

* This allows **direct access** instead of scanning.

### Steps:

1. Compute hash of key
2. Map to index
3. Store/retrieve value directly

✔ Result: **O(1) average time**

---

## 3. Why Collisions Happen

* Different keys can map to the same index.
* Example:
  hash(a) % n = hash(b) % n

### Handling (Python):

* Open addressing
* Probing
* Resizing

---

## 4. Time Complexity (Important)

| Operation | Average | Worst Case |
| --------- | ------- | ---------- |
| Insert    | O(1)    | O(n)       |
| Search    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |

### Meaning of “Average O(1)”:

* Expected over good hash distribution
* Assumes minimal collisions

---

## 5. Set vs List

### List:

* Search → O(n)
* Insert/Delete → O(n)
* No direct mapping

### Set:

* Uses hashing
* Search → O(1)
* Insert/Delete → O(1)

✔ Key difference: **direct access vs sequential scan**

---

## 6. Python Set

* Stores **unique elements only**
* Backed by hash table

### Operations:

* add(x)
* remove(x)
* x in set

✔ All average **O(1)**

---

## 7. Python Dictionary

* Stores **key → value (frequency, mapping)**

### Example:

count[x] = count.get(x, 0) + 1

### Use Case:

* Frequency tracking
* Multiset simulation

---

## 8. del vs pop

| Feature         | del | pop              |
| --------------- | --- | ---------------- |
| Remove key      | ✔   | ✔                |
| Returns value   | ✘   | ✔                |
| Safe if missing | ✘   | ✔ (with default) |

✔ Both are **O(1) average**

---

## 9. Problem 1: Set Queries

### Approach:

* Use **set**
* Operations: add, remove, check, size

### Complexity:

* Each operation → O(1)
* Total → **O(q)**

---

## 10. Problem 2: Multiset Queries

### Approach:

* Use **dictionary (frequency map)**

### Key Logic:

* Insert: count[x] += 1
* Remove: count[x] -= 1 → delete if 0
* Count distinct: len(dict)

### Complexity:

* Each operation → O(1)
* Total → **O(q)**

---

## 11. Problem 3: Intersection of Two Arrays

### Approach:

1. Convert both arrays to sets
2. Compute intersection
3. Sort result

### Code Idea:

ans = sorted(set1 & set2)

### Complexity:

* Set conversion → O(n + m)
* Intersection → O(min(n, m))
* Sorting → O(k log k)

### Final:

O(n + m + k log k)

---

## 12. Key Takeaways

* Hashing enables **constant time operations**
* Sets → uniqueness + fast lookup
* Dictionaries → frequency + mapping
* Worst case exists but is rare
* Prefer hashing for performance-critical problems

---

## 13. Mental Models

### List:

"Search everything"

### Set/Dict:

"Compute where it is"

---

## 14. Common Mistakes (You Avoided / Fixed)

* Using set when frequency is needed
* Not deleting key when count = 0
* Misunderstanding O(1) vs worst-case

---

## 15. Final Insight

Hashing trades:

* Slight theoretical risk (O(n))
  FOR
* Massive practical speed (O(1))

This is why it is used everywhere:

* Databases
* Caches
* Backend systems
* Compilers

---

## End of Day Summary

You learned:

* First-principles hashing
* Set vs dict usage
* Time complexity rigor
* Real problem applications

This is **core DSA + backend foundation**.

---

# 📘 Intersection of Two Arrays II — Notes

---

## 🔹 Problem Summary

Given two arrays `A` and `B`, find their **intersection with multiplicity**.

* Each element `x` should appear:

```
min(count of x in A, count of x in B)
```

* Output must be in **increasing order**.

---

## 🔹 Key Idea

This is a **multiset intersection problem**.

👉 We must track **frequency**, not just presence.

---

## 🔹 Approach (Dictionary / HashMap)

### Step 1: Count frequencies

```python
d1 = {}
for x in nums1:
    d1[x] = d1.get(x, 0) + 1

d2 = {}
for y in nums2:
    d2[y] = d2.get(y, 0) + 1
```

---

### Step 2: Compute intersection

```python
ans = {}
for x in d1:
    if x in d2:
        ans[x] = min(d1[x], d2[x])
```

---

### Step 3: Build result

```python
inter = []
for x in ans:
    inter += [x] * ans[x]
```

---

### Step 4: Sort and output

```python
inter = sorted(inter)
print(len(inter))
print(*inter)
```

---

## 🔹 Time Complexity Analysis

Let:

```
n = len(nums1)
m = len(nums2)
k = size of intersection (with multiplicity)
```

### 1. Frequency counting

```
O(n + m)
```

### 2. Intersection computation

```
O(n)   (worst case: all keys unique)
```

### 3. Building result list

```
O(k)
```

### 4. Sorting result

```
O(k log k)
```

---

## 🔹 Final Time Complexity

```
O(n + m + k log k)
```

---

## 🔹 Space Complexity

```
O(n + m + k)
```

* Dictionaries store frequencies
* Result list stores output

---

## 🔹 Optimization Insight

Instead of sorting the full list (`k` elements), we can:

```python
inter = []
for x in sorted(ans):
    inter.extend([x] * ans[x])
```

### Improved Complexity:

```
O(n + m + u log u + k)
```

Where:

* `u = number of unique common elements`

---

## 🔹 Pythonic Approach (Counter)

```python
from collections import Counter

c1 = Counter(nums1)
c2 = Counter(nums2)

inter = list((c1 & c2).elements())

print(len(inter))
print(*sorted(inter))
```

---

## 🔹 Key Takeaways

* Use **dictionary when frequency matters**
* Use **min(count1, count2)** for multiset intersection
* Sorting depends on **output size (k)**, not input size
* Always identify whether problem is:

  * Set-based (unique)
  * Multiset-based (frequency)

---

## 🔹 Mental Model

```
Set Intersection → Unique elements
Multiset Intersection → Frequency-based
```

---

## 🔹 Common Mistakes

* Using set instead of dictionary
* Forgetting multiplicity
* Wrong complexity: writing log(n) instead of n log n
* Ignoring output size in sorting

---

## ✅ Final Insight

In problems involving frequency:

👉 Always think:

```
"Do I need count or just presence?"
```

That determines:

* `set` vs `dict`
