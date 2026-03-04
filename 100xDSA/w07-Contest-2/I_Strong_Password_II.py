'''  
    Author: Pritam
''' 
import sys
# input = sys.stdin.readline

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
    s = input()

    c = 0
    if any(c.isdigit() for c in s):
        c += 1
    if any(c.islower() for c in s):
        c += 1
    if any(c.isupper() for c in s):
        c += 1
    if any(not c.isalnum() for c in s):
        c += 1
    
    if c == 4:
        print("Strong")
    elif c < 3:
        print("Weak")
    else:
        print("Moderate")


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
