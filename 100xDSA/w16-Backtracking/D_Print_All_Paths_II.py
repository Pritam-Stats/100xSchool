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

def f(n:int, m:int, i: int, j: int, path: list[str], matrix: list[list]):
    if i >= n+1 or j >= m+1 or matrix[i-1][j-1] == 1:
        return
    if i == n and j == m:
        print_fast(''.join(path))
        return
    
    path.append("R")
    f(n, m, i, j+1, path, matrix)
    path.pop()
    
    path.append("D")
    f(n, m, i+1, j, path, matrix)
    path.pop()

def main():
    n, m = inmap()
    matrix = []
    for _ in range(n):
        row = inlt()
        matrix.append(row)
    # print(*matrix)
    f(n, m, i= 1, j = 1, path = [], matrix = matrix)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main() 