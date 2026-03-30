'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n = int(input())
    s = input().strip()
    ans = []
    def ispal(s):
        return s == s[::-1]
    
    for st in range(n):
        for end in range(st, n):
            if ispal(s[st:end+1]):
                ans.append((s[st:end+1]))
    print("\n".join(ans))


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()