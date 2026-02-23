from sys import stdin
input = stdin.readline


def solve():
    a, b = list(map(int, input().split()))

    if (0 <= a <= 1) and (0 <= b <= 1):
        print("Yes")
    elif a == b:
        print("Yes")
    else:
        print("No")
    

if __name__ == "__main__":
    solve()