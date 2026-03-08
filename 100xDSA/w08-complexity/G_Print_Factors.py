'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    factors = []
    for d in range(1, int(n**(0.5) + 1)):
        if n%d == 0:
            factors.append(d)

            if d*d != n:
                factors.append(n//d)
    factors.sort()
    print(*factors)

    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
