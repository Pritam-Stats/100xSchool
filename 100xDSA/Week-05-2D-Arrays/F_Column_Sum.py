import sys
input = sys.stdin.readline

DEBUG = False

def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)

def main():
    n, m = list(map(int, input().split()))
    matrix = [list(map(int, input().split())) for _ in range(n)] 
    colSums = []
    for j in range(m): #cols
        cSum = 0
        for i in range(n):  #rows
            cSum += matrix[i][j]
        colSums.append(str(cSum))
    print(" ".join(colSums))


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
