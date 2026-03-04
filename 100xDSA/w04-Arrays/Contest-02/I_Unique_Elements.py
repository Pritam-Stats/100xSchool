from sys import stdin
input = stdin.readline


def solve():
    
    n = int(input())
    nums = list(map(int, input().split()))

    ans = []
    for v in nums:
        if nums.count(v) == 1:
            ans.append(v)
    print(*ans)

if __name__ == "__main__":
    solve()