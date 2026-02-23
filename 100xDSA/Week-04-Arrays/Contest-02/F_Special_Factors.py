from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    factors = []
    for i in range(1, n+1):
        if n%i == 0:
            factors.append(i)

    sp = []
    for f in factors:
        if f%10 == 7 or f%10 == 2:
            sp.append(f)
    if not sp:
        print(-1)
    else:
        print(*sp)
if __name__ == "__main__":
    solve()