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
            # factors.append(d)
            print(d, end=" ")

            # if d*d != n:
            #     factors.append(n//d)
    for d in range(int(n**(0.5)), 0, -1):
        if n % d == 0:
            if d*d != n:
                # factors.append(n//d)
                print(n//d, end= ' ')
    # factors.sort()
    # print(*factors)
 
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
