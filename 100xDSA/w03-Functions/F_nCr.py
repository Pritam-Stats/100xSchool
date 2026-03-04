from sys import stdin
input = stdin.readline

def solve():
    n, r = list(map(int, input().split()))
    def factorial(n):
        fact = 1
        if n == 0:
            return 1
        else:
            for i in range(1, n+1):
                fact *= i
        return fact
    
    ncr = factorial(n)//(factorial(r) * factorial(n-r))
    print(ncr)

if __name__ == "__main__":
    solve()