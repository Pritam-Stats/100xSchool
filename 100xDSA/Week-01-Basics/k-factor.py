from sys import stdin
input = stdin.readline
n, f = list(map(int, input().split()))
if n%f == 0:
    print("Yes")
else:
    print("No")