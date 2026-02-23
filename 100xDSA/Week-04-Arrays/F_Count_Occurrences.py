from sys import stdin
input = stdin.readline


def solve():
    n, x = list(map(int, (input().split())))
    nums = list(map(int, input().split()))

    count = 0
    for i in range(n):
        if nums[i] == x:
            count += 1
    print(count)
    
    

if __name__ == "__main__":
    solve()