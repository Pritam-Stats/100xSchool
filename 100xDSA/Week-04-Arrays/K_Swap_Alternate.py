from sys import stdin
input = stdin.readline


def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())

        #unexpected pitfall
        if n == 0:
            print()
            continue

        nums = list(map(int, input().split()))

        n = n - n%2
        for i in range(0, n, 2):
            nums[i], nums[i+1] = nums[i+1], nums[i]
        print(*nums)

if __name__ == "__main__":
    solve()