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


def f(n, k, a, i, s, path, ans) -> list[list]:
    if i == n:
        if s == k:
            ans.append(path[:])
        return
    
    path.append(a[i])
    f(n, k, a, i+1, s + a[i], path, ans)
    path.pop()

    f(n, k, a, i+1, s, path, ans)


def main():
    n, k = inmap()
    a = inlt()
    ans = []
    f(n, k, a, i=0, s=0, path=[], ans = ans)

    print(len(ans))
    for sub in ans:
        print_fast(*sub)



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main()
