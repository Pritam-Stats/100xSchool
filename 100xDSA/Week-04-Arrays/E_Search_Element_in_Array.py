from sys import stdin
input = stdin.readline


def solve():
    n, x = list(map(int, (input().split())))
    nums = list(map(int, input().split()))

    def isPresent(arr, target):
        found = False
        for i in range(n):
            if arr[i] == target:
                found = True
                break
        print("YES" if found else "NO")
        
    isPresent(nums, x)

if __name__ == "__main__":
    solve()