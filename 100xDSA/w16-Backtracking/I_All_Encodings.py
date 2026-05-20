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

def f(s:str, idx: int, n:int, path:list, ans:list):
    if idx==n:
        ans.append(''.join(path))
        return

    #take 1
    if int(s[idx]) != 0:
        d = int(s[idx])
        ch = chr(d+96)
        path.append(ch)
        f(s, idx+1, n, path, ans)
        path.pop()

    #take 2
    if idx+1<n and 10<=int(s[idx:idx+2]) <= 26:
        d = int(s[idx:idx+2])
        ch = chr(d+96)
        path.append(ch)
        f(s,idx+2, n, path,ans)
        path.pop()

    


def main():
    s = ins()
    n = len(s)
    ans = []
    f(s=s, idx=0, n=n, path = [], ans = ans)
    print(len(ans))
    print_fast('\n'.join(ans))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main() 