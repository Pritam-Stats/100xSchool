from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    flag = True
    for i in range(1, n):
        if nums[i-1] > nums[i]:
            flag = False
            break
    print("YES" if flag else "NO")



if __name__ == "__main__":
    solve()