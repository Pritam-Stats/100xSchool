'''  
    Author: Pritam
''' 
'''  
Technique: transpose the matrix then rev each row
Intuition: 
Mistake: we have to consider nested loops even for square matrix
Time: O(n**2)
Space: O(1)
''' 

import sys
input = sys.stdin.readline
def main():
    n = int(input())
    matrix = [list(map(int, input().split())) for _ in range(n)] 
    # write solution here
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    for i in range(n):
        matrix[i] = matrix[i][::-1]
    
    ## printing
    for row in matrix:
        print(*row)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
