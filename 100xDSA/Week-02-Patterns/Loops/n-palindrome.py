n = int(input())
temp = n

if n == 0:
    print("YES")
else:
    rev = ""
    while temp:
        rev += str(temp%10)
        temp = temp//10

    if int(rev) == n:
        print('YES')
    else:
        print("NO")