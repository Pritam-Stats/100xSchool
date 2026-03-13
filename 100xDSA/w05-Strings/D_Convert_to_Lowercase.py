'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    ch = input().strip()
    if ord(ch) < ord("a"):
        #means uppercase
        print(chr(ord(ch) + 32))    # the difference between lower and uppercase is 32
    else:
        print(ch)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
