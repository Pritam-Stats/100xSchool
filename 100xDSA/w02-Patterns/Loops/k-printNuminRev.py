## catch is for input 1950 return 0591 not 591

## most probably to return a string

from sys import stdin, stdout
input = stdin.readline
out = stdout.write

n = int(input())

if n == 0:
    print("0")
else:
    rev = ""
    while n:
        rev += str(n%10)
        n //= 10
    out(f"{rev}\n")