# ================================
# Author: Pritam
# ================================


from types import GeneratorType
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


# custom stack manager for python to avoid RTE in cf using python


def bootstrap(f, stack=None):
    if stack is None:
        stack = []

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
    n = inp()
    a = inlt()
    x = inp()
    ans = []

    @bootstrap
    def f(a, n, x):
        if n <= 0:
            yield
            return
        yield f(a, n-1, x)
        if a[n-1] == x:
            ans.append(n)
        yield

    f(a, n, x)
    if not ans:
        print(-1)
    else:
        print(*ans)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
