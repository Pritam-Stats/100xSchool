n = int(input())
if n == 0:
    print(1)
else:
    count = 0
    while n:
        if n%10 == 0:
            count += 1
        n //= 10
    print(count)
