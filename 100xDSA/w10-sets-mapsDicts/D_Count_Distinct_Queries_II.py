'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    q = int(input())
    s = {}  #similar to the prev problem but this time we have to use dictionary not set
    for _ in range(q):
        entries = list(map(int, input().split()))
        if len(entries) == 2:
            type, x = entries
        else:
            type = 3

        if type == 1:
            s[x] = s.get(x, 0) + 1
        elif type == 2:
            if x in s: 
                s[x] = s.get(x) - 1
                if s[x] == 0:
                    del s[x]

        elif type == 3:
            print(len(s))
        else:
            print("YES" if x in s else "NO")


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()