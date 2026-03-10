'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    s = input().strip()
    sList = s.split(" ")
    maxW = 0
    for w in sList:
        maxW = max(maxW, len(w))
    print(maxW)
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
