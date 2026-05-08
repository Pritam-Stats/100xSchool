# ================================
# Author: Pritam
# ================================


from types import GeneratorType
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

class Solution():
    # @staticmethod
    @bootstrap  
    @staticmethod
    def sumN(n):
        if n == 1:
            yield 1
        else:
            res = yield Solution.sumN(n-1)
            yield n+res
        # yield

    @staticmethod
    def main():
        n = inp()
        ans = Solution.sumN(n)
        print(ans)




# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        Solution().main() 