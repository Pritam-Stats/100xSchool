## inverted crown + crown

n = int(input())
for i in range(n,0,-1):
    print("*"*i + " "*(2*n -2*i+1) + "*"*i) 
for i in range(2,n+1):
    print("*"*i + " "*(2*n - 2*i+1) +"*"*i)