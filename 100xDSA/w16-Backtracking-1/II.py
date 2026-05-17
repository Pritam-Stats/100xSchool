# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------
def ceil(a, b):    ##relation b/w floor division and ceil division
    return (a+b-1)//b
def inp():
    return int(input())
def inlt():
    return list(map(int, input().split()))
def ins():
    return input().strip()
def inmap():
    return map(int, input().split())
def print_fast(*args):
    sys.stdout.write(" ".join(map(str, args)) + '\n')
# ---------- Solve Function ----------
def f(n:int, k: int, state: int, path:list):
    if state > n:
        return
    if state == n:
        print_fast(*path)
        return
    
    for jump in range(1, k+1):
        path.append(jump)
        f(n, k, state + jump, path)
        path.pop()


def main():
    n, k = inmap()

    f(n, k, state = 0, path = [] )


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main() 