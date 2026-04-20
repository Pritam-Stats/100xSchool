# A - Print All Divisors

## Optimized Approach (Using SPF + Factorization)

Instead of checking every divisor, we use **prime factorization** to generate divisors efficiently.

---

## 1. Precomputation Phase: Smallest Prime Factor (SPF)

We build an array `spf` where:

* `spf[x]` = smallest prime factor of `x`

### How it works

* Initialize: `spf[i] = i`
* Iterate from `i = 2`
* If `spf[i] == i`, then `i` is prime
* Update multiples of `i` starting from `i * i`

### Example

```
spf[12] = 2
spf[9]  = 3
spf[7]  = 7
```

---

## 2. Factorization Phase

For each number `i`, we extract its prime factorization using `spf`.

### Example: `i = 12`

```
temp = 12
p = spf[12] = 2

12 → 6 → 3
count = 2
temp = 3
```

---

## 3. Building Divisors

Start with:

```
divisors = [1]
```

### Step 1: Handle prime `2^2`

```
[1] → multiply by 2^1 and 2^2 → [2, 4]

divisors = [1, 2, 4]
```

### Step 2: Handle prime `3^1`

```
[1, 2, 4] → multiply by 3 → [3, 6, 12]

divisors = [1, 2, 4, 3, 6, 12]
```

---

## 4. Output Phase

Sort before printing:

```
sorted(divisors) = [1, 2, 3, 4, 6, 12]
```

Use:

```python
print_fast(*sorted(divisors))
```

---

## Summary

* Naive approach: `O(N √N)`
* Optimized approach:

  * SPF preprocessing: `O(N log log N)`
  * Factorization per number: `O(log N)`

Divisors are generated directly using prime combinations, avoiding redundant checks and significantly improving performance.


---


---

You got it. Your code is now clean, functional, and mathematically beautiful.
Here is the final, definitive breakdown of the logic powering this code, step-by-step.
The core idea of this solution is to avoid the slow O(\sqrt{N}) division checks for every number. Instead, it uses Prime Factorization and Combinatorics to build divisors directly.
Phase 1: The "Cheat Sheet" (SPF Sieve)
Before processing individual numbers, you build an array called spf (Smallest Prime Factor) for every number up to N.
    spf = list(range(n+1))
    i = 2
    while i*i <= n+1:
        if spf[i] == i:
            for j in range(i*i, n+1, i):
                if spf[j] == j: 
                    spf[j] = i  
        i += 1  

• The Goal: For any number X, spf[X] will tell us the smallest prime number that divides X.
• How it works: It acts like the Sieve of Eratosthenes. It starts by assuming every number is its own smallest prime factor. Then, starting from 2, if a number is prime (spf[i] == i), it visits all multiples of i and marks their spf as i (unless they've already been marked by a smaller prime).
• Example: If N=12, after this runs, spf[12] = 2, spf[9] = 3, and spf[7] = 7.
Phase 2: Prime Factorization
Now you loop through every number from 1 to N. Let's trace what happens when i = 12.
        temp = i
        while temp > 1:
            p = spf[temp]
            count = 0
            while temp%p == 0:
                count +=1
                temp //= p

• The Goal: Break the number down into its prime components. We want to find out that 12 = 2^2 \times 3^1.
• How it works: 1. temp is 12. You ask the cheat sheet: "What's the smallest prime of 12?" It answers p = 2. 2. You divide temp by 2 as many times as possible to find the count (the power). 12 \div 2 = 6, 6 \div 2 = 3. So, for prime 2, count = 2. 3. temp is now 3. The loop repeats. The smallest prime of 3 is p = 3. It divides once. So, for prime 3, count = 1. temp becomes 1, and the loop ends.
Phase 3: Building the Divisors (Combinatorics)
This is where the real magic happens. Instead of guessing factors, you construct them using the prime components you just found.
            new_divs = []
            for d in divisors:
                for k in range(1, count + 1):
                    new_divs.append(d* (p**k))
            divisors.extend(new_divs)

• The Goal: Generate all divisors by multiplying existing divisors by the powers of the current prime.
• How it works (Continuing with 12): • You start with divisors = [1]. • First prime (p=2, count=2): You multiply every number in divisors by 2^1 and 2^2. • 1 * 2 = 2 • 1 * 4 = 4 • You add these to your list. divisors is now [1, 2, 4]. • Second prime (p=3, count=1): You multiply every number in your new divisors list by 3^1. • 1 * 3 = 3 • 2 * 3 = 6 • 4 * 3 = 12 • You add these to your list. divisors is now [1, 2, 4, 3, 6, 12].
Phase 4: Output
        print_fast(*sorted(divisors))

Because the combinatorial building method above appends numbers in a slightly jumbled order ([1, 2, 4, 3, 6, 12]), you sort the array to get [1, 2, 3, 4, 6, 12].
Finally, the * unpacks the list, and your print_fast helper converts them to strings and prints them separated by spaces.
Why this is great: By doing the math this way, you bypassed millions of unnecessary % (modulo) operations that a standard 1 to \sqrt{N} loop would have forced you to do!


---



```
# -----------------------------
# Naive Approach (TLE)
# -----------------------------

for i in range(1, n + 1):
    factors = []
    d = 1

    while d * d <= i:
        if i % d == 0:
            factors.append(d)
        d += 1

    d -= 1

    while d >= 1:
        if i % d == 0 and d != i // d:
            factors.append(i // d)
        d -= 1

    print_fast(*factors)


# -----------------------------
# Better Approach (MLE)
# -----------------------------

factors = [[] for _ in range(n)]  # n empty arrays

for i in range(1, n + 1):
    for j in range(i, n + 1, i):
        factors[j - 1].append(i)

for facts in factors:
    print(*facts)


# -----------------------------
# Optimized Approach (SPF + Factorization)
# -----------------------------

# Step 1: Compute SPF (Smallest Prime Factor)
spf = list(range(n + 1))

for i in range(2, int(n ** 0.5) + 1):
    if spf[i] == i:  # i is prime
        for j in range(i * i, n + 1, i):
            if spf[j] == j:
                spf[j] = i


# Step 2: Generate divisors using prime factorization
for i in range(1, n + 1):
    temp = i
    prime_factors = {}

    # Factorization using SPF
    while temp > 1:
        p = spf[temp]
        prime_factors[p] = prime_factors.get(p, 0) + 1
        temp //= p

    # Step 3: Build divisors
    divisors = [1]

    for p, count in prime_factors.items():
        new_divs = []
        for exp in range(1, count + 1):
            for d in divisors:
                new_divs.append(d * (p ** exp))
        divisors.extend(new_divs)

    # Step 4: Output sorted divisors
    print_fast(*sorted(divisors))
```



---



# SPF Divisors — 30s Revision

## Idea

n = p1^a · p2^b … ⇒ divisors = all combinations of powers.

---

## 1) Build SPF (O(N log log N))

```
spf[i]=i
for i=2..√N:
  if spf[i]==i:
    for j=i*i..N step i:
      if spf[j]==j: spf[j]=i
```

---

## 2) Factorize (O(log N))

```
while x>1:
  p=spf[x]
  cnt[p]++
  x//=p
```

---

## 3) Build Divisors

```
divs=[1]
for (p,cnt):
  add d*(p^1..p^cnt) for each d in divs
```

---

## 4) Output

```
sorted(divs)
```

---

## Complexity

* Precompute: O(N log log N)
* Per number: O(log N + #divs)

---

## Memory Trick

SPF → Factorize → Combine powers

---

## Minimal Function

```
def get_divs(x):
  freq={}
  while x>1:
    p=spf[x]; freq[p]=freq.get(p,0)+1; x//=p
  divs=[1]
  for p,c in freq.items():
    new=[]
    for e in range(1,c+1):
      for d in divs: new.append(d*(p**e))
    divs+=new
  return sorted(divs)
```
