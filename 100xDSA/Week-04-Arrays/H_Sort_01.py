from sys import stdin
input = stdin.readline


def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split()))

        zeros = nums.count(0)
        ones = n - zeros

        ans = ([0]*zeros) + ([1]*ones)
        print(*ans)

    

if __name__ == "__main__":
    solve()