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

def f(n: int, curr: int, path: list):
    if curr > n:
        return
    
    if curr == n:
        print_fast(*path)
        return

    ## jump 1
    path.append(1)
    f(n, curr + 1, path)
    path.pop()

    ##jump 2
    path.append(2)
    f(n, curr + 2, path)
    path.pop()

def main():
    n = inp()
    f(n, curr = 0, path = [])


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main() 