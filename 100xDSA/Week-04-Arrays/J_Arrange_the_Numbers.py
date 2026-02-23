from sys import stdin
input = stdin.readline


def solve():
    t = int(input())
    
    for _ in range(t):
        n = int(input())
        # nums = list(map(int, input().split()))

        if n%2 == 0:
            for i in range(1, n, 2):
                print(i, end=" ")
            for i in range(n, 1, -2):
                print(i, end=" ")
        else:
            for i in range(1, n+1, 2):
                print(i, end=" ")
            for i in range(n-1, 1, -2):
                print(i, end=" ")
        print()
if __name__ == "__main__":
    solve()