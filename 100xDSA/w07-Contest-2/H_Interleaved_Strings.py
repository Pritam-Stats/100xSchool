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
    s1 = input()
    s2 = input()
    l1 = list(s1)
    l2 = list(s2)
    n1,n2 = len(l1), len(l2)
    ans = []
    for i in range(min(n1, n2)):
        ans.append(l1[i])
        ans.append(l2[i])
    if n1>n2:
        for i in range(n2, n1):
            ans.append(l1[i])
    else:
        for i in range(n1, n2):
            ans.append(l2[i])
    # ans.remove('\n')
    print('-'.join(ans))
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
