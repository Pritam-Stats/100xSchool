n = int(input())

j = ""
for i in range(1,n+1):
    if i%2 != 0:
        j = "0"+j
    else:
        j = "1"+j
    print(j)