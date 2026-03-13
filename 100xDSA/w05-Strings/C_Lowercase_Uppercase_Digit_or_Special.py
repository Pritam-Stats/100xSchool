'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    ch = input().strip()
    if 48 <= ord(ch) <= 57:
        print("Digit")
    elif 65 <= ord(ch) <= 90:
        print("Uppercase")
    elif 97 <= ord(ch) <= 122:
        print("Lowercase")
    else:
        print("Special")




def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
