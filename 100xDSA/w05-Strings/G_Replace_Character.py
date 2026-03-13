'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    # one line cp sln
    # print(input().strip().replace(*input().split()))
    
    s = input().strip()
    c1, c2 = input().strip().split()
    '''In Python, strings are immutable, so every += creates a new string.
Therefore the complexity becomes approximately: O(n2)'''
    # ans = ""
    # for ch in s:
    #     if ch == c1:
    #         ans += c2
    #     else:
    #         ans += ch
    # print(ans)    O(N2)

    ans = []
    for ch in s:
        if ch == c1:
            ans.append(c2)
        else:
            ans.append(ch)
    print("".join(ans))

    # print(s.replace(c1, c2))

    ## TC: O(N)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()