# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------


def ceil(a, b):  # relation b/w floor division and ceil division
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



from types import GeneratorType
## custom stack manager for python to avoid RTE in cf using python
def bootstrap(f, stack=None):
    if stack is None: stack = []
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

## logic of the recursion   - code to get accepted
@bootstrap
def printArr(a, n, i):
    if i==n:
        yield None      ##must yield something to satisfy the bootstrap
        return ##stop
    
    #move to the next num
    print(a[i], end=" ")
    yield printArr(a, n, i+1) 
    yield ##final to close the specific generator instance


## APPROACH - 1 - bottom -up
# correct code but won't run in py
# def printArr(a, n):
#     if n == 0:
#         return
#     printArr(a, n-1)    #recurse, hit the base case then unwind
#     print(a[n-1], end=" ")

## APPROACH - 2 - top-down

# def printArr(a, n, i):
#     if i == n:
#         return

#     print(a[i], end=" ")
#     printArr(a, n, i+1)


def solve():
    n = inp()
    a = inlt()
    i = 0
    printArr(a, n, i)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
