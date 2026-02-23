n = int(input())

for i in range(n,0,-1):
    print((". "*i).center(2*n - 1).rstrip())
for i in range(2,n+1):
    print((". "*i).center(2*n -1).rstrip())
