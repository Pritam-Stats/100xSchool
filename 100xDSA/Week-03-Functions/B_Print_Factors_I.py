from sys import stdin
input = stdin.readline

def solve():
    n = int(input())
    def factors(n):
        factor = []
        for i in range(1, n+1):
            if n%i == 0:
                factor.append(str(i))
        print(" ".join(factor))
    factors(n)

if __name__ == "__main__":
    solve()