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
    
    def rowSum(row: list) -> int:
        return sum(row)

    rowSums = []
    for row in matrix:
        rowSums.append(rowSum(row))

    maxRowSum = max(rowSums)
    if maxRowSum == 0:
        return -1
    for i in range(n):
        if rowSum(matrix[i]) == maxRowSum:
            return i
    return -1

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       print(main())

if __name__ == "__main__":
    solve()
