'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    # nums = list(map(int, input().split())) if n>0 else [] 
    # write solution here
    def isPrime(num):
        if num == 1:
            return False
        for d in range(2, int(num**(0.5) + 1)):
            if num % d == 0:
                return False
        return True
    prime = 0
    for num in range(2, n+1):
        prime += 1 if isPrime(num) else 0
    print(prime)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
