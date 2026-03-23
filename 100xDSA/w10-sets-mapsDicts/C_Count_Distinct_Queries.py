'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    q = int(input())
    s = set()  #empty set   #array will give a tle

    for _ in range(q):  
        entries = list(map(int, input().split()))
        if len(entries) == 2:
            type, x = entries
        else:
            type = 3
        if type == 1:
            s.add(x)
        elif type == 2:
            if x in s: s.remove(x)
        elif type == 4:
            print("YES" if x in s else "NO")
        else:
            print(len(s))

    ## tc - O(q) since adding removing searching in set is O(1)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()