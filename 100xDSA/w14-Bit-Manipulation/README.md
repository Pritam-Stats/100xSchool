# Bit Manipulation – Competitive Programming Revision Notes

---

## Binary Basics

- Representation: integers stored in binary (base-2)
- Bit positions: 0-indexed from LSB (rightmost)
- Bit length:
    - bits(n) = floor(log2(n)) + 1

---

## Core Bitwise Operators

Operator	Name	Behavior
```
    `&`	AND	1 only if both bits are 1
    `|`	OR
    `^`	XOR	1 if bits differ
    `~`	NOT	flips all bits (two’s complement)
    `<<` Left shift	multiply by 2^k
    `>>` Right shift	divide by 2^k (floor)
```

---

## Powers of Two

- Generate:

```py
1 << k   # 2^k
```

- Check if power of two:

```py
n > 0 and (n & (n - 1)) == 0
```

- Remove lowest set bit:

```py
n & (n - 1)
```

- Isolate lowest set bit:

```py
n & -n
```

- Highest power of 2 ≤ n:

```py
    1 << (n.bit_length() - 1)
```

---
## Bit Operations on Index i

- Check bit:
```py
(n >> i) & 1
```

- Set bit:
```py
n | (1 << i)
```
- Clear bit:
```py
n & ~(1 << i)
```
- Toggle bit:
```py
n ^ (1 << i)
```
---
## Counting Bits

- Builtin:
    ```py
    n.bit_count()
    ```
- Brian Kernighan:
    ```py
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    ```
- Complexity: O(number of set bits)

---
## XOR Properties (Very Important)

- `a ^ a = 0`
- `a ^ 0 = a`
- Commutative and associative

Applications:

- Find unique element (others appear twice)
- Prefix XOR

---
## Subsets using Bitmask

- Iterate all subsets of size n:
    ```py
    for mask in range(1 << n):
        for i in range(n):
            if mask & (1 << i):
                pass
    ```py
- Submask iteration:
    ```py
    sub = mask
    while sub:
        sub = (sub - 1) & mask
    ```
- Complexity: O(2^n)

---
## Bitmask DP (Pattern)

- State: dp[mask]
- Transition: remove or add bits

Example idea:

- Traveling Salesman (TSP)
- Assignment problems

---
## Tricks and Identities

- Addition using bits: `A + B = (A ^ B) + ((A & B) << 1)`

- Negation (Two’s Complement): `-n = ~n + 1`

- Check opposite signs: `(a ^ b) < 0`

- **Swap without temp**
    ```py
    a ^= b
    b ^= a
    a ^= b
    ```
---

## Range Tricks

- XOR from 1 to n:
    ```py
    def xor_1_to_n(n):
        return [n, 1, n+1, 0][n % 4]
    ```
- Range XOR:
    ```py
    xor(l, r) = xor_1_to_n(r) ^ xor_1_to_n(l-1)
    ```
---

## Bitwise Greedy Patterns

- Maximize XOR → try setting highest bits first
- Trie (binary trie) for XOR queries

---
##  Common Problems Mapping

- Single number → XOR
- Two unique numbers → XOR + partition by set bit
- Missing number → XOR / sum formula
- Subset generation → bitmask
- Maximum XOR pair → trie

---

## Complexity

- Bitwise ops: O(1)
- Loop over bits: O(log n)
- Subsets: O(2^n)

---

## Pitfalls

- Negative numbers behave differently due to infinite sign extension
- Right shift of negative numbers is implementation-dependent in some languages
- Overflow in C++ (use long long)

---