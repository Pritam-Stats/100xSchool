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

def main():
    n = int(input())
    names = []
    for _ in range(n):
        names.append(input().strip())
    target = input().strip()
    
    st, end = 0, n-1
    while st<=end:
        mid = (st+end)//2
        if names[mid] == target:
            print("YES")
            return
        elif names[mid] > target:
            end = mid -1
        else:
            st = mid + 1
    print("NO")
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
