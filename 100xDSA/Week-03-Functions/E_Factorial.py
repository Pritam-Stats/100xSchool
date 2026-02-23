from sys import stdin
input = stdin.readline

def solve():
    n = int(input())
    def factorial(n):
        fact = 1
        if n == 0:
            print(1)
            return
        else:
            for i in range(1, n+1):
                fact *= i
        print(fact)
    factorial(n)


if __name__ == "__main__":
    solve()