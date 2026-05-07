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


# 1. The Bootstrap Decorator

from types import GeneratorType
def bootstrap(f, stack=[]):
    def func_wrapper(*args, **kwargs):
        if stack:
            return f(*args, **kwargs)
        to = f(*args, **kwargs)
        while True:
            if type(to) is GeneratorType:
                stack.append(to)
                to = next(to)
            else:
                stack.pop()
                if not stack:
                    break
                to = stack[-1].send(to)
        return to
    return func_wrapper

def solve():
    # Read N from input
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    n = int(input_data[0])

    # 2. Your Recursive Logic
    @bootstrap                  ###ACCEPTED
    def print_decreasing(n):
        if n == 0:
            yield
        else:
            # This prints directly to standard output
            print_fast(n)
            yield print_decreasing(n - 1)
            yield
    print_decreasing(n)






'''RTE
def solve():
    n = inp()

    def dec(n):
        if n == 0:
            return
        print(n)
        dec(n-1)
    dec(n)

'''
# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 