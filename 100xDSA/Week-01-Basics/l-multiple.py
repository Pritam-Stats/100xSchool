from sys import stdin
input = stdin.readline
n, m = list(map(int, input().split()))
if m%n == 0:
    print("Yes")
else:
    print("No")