'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, q = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 
    hashmap = {}
    for i in range(n):
        hashmap[nums[i]] = i + 1; #value became the key 

    #advantage of hashmap - O(1) lookup
    for _ in range(q):
        x = int(input())
        print(hashmap.get(x, -1))
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()