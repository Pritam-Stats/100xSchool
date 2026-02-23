import sys
input = sys.stdin.readline

DEBUG = False

def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        n, target = list(map(int, input().split()))
        nums = list(map(int, input().split())) if n>0 else [] 
        
        count = 0
        for i in range(n):
            for j in range(i+1, n):
                for k in range(j+1, n):
                    for l in range(k+1, n):
                        if nums[i] - (2*nums[j]) + (3*nums[k]) - (4*nums[l]) == target:
                            count += 1
        print(count)

if __name__ == "__main__":
    solve()
