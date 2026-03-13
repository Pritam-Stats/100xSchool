'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n1 = input().strip()
    n2 = input().strip()
    n1 = n1.split(" ")
    n2 = n2.split(" ")

    if n1[1] == n2[1]:  
        print("YES")
    else:
        print("NO")





def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()