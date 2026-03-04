from sys import stdin
input = stdin.readline


def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split()))

        dup = sum(nums) - sum(set(nums))
        print(dup)
if __name__ == "__main__":
    solve()