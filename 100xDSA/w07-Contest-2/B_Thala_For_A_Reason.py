'''  
    Author: Pritam
''' 
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
    dSum = 0
    while n:
        dSum += n%10
        n = n//10
    
    if dSum == 7:
        print("Thala for a reason")
    else:
        print("Blocked for no reason")


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
