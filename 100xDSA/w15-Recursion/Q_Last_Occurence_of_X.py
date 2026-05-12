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

    @bootstrap
    def f(a: list, n: int, x: int):
        if n <= 0:
            yield -1
            return
        ans = (n-1 if a[n-1] == x else -1)
        if ans != -1:
            yield ans + 1
            return
        ans = yield f(a, n-1, x)
        yield ans

    ans = f(a, n, x)
    print(ans)      ## if we do +1 here in case of not found ans will become 0


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
