'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline


'''  
Technique: Continuous counting
Intuition: Run length encoding with continuous count
Mistake: got the question wrong, its not to count, but asks to count only consecutive
Time: O(n)
Space: O(1)
''' 

def main():
    s = input().strip()
    if len(s) == 1:
        print(s)
    else:
        ans = ""
        count = 1
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                count += 1
            else:
                if count > 1:
                    ans += s[i-1] + str(count)
                else:
                    ans += s[i-1]
                count = 1
        if count > 1:
            ans += s[-1] + str(count)
        else:
            ans += s[-1]
        print(ans)
        

    


    


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
