'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    s = input().strip()
    x = input().strip()
    ans = []
    for ch in s:
        if ch != x:
            ans.append(ch)
        else:
            continue
    print("".join(ans))



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()