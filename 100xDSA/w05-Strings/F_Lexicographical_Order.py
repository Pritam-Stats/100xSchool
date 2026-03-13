'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
'''  
    Author: Pritam
'''
'''  
Technique: loop with zip
Intuition: if else
Mistake: not considering the edge case app and apple have to check the len before printing equal
Time: O(min(a, b))
Space: O(1)
'''

def main():
    A = list(input().strip())
    B = list(input().strip())



    for cha, chb in zip(A, B):
        if cha != chb:
            if cha < chb:
                print("A")
            else:
                print("B")
            return
        else:
            continue
    if len(A) == len(B):
        print("Equal")
    else:
        print("A" if A < B else "B")


    # shortcut
    if A < B:
        print("A")
    elif A > B:
        print("B")
    else:
        print("Equal")



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()