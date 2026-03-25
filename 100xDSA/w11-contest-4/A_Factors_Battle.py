'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    a, b = map(int, input().split())
    ca = 0
    for d in range(1, int(a**0.5) + 1):
        if a%d == 0:
            ca += 1
    cb = 0
    for d in range(1, int(b**0.5) + 1):
        if b%d == 0:
            cb += 1

    if ca > cb:
        print("A")
    elif ca < cb:
        print("B")
    else:
        print("DRAW")
    # write solution here 


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()