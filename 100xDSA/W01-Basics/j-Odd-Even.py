n = int(input())

#93ms on cf
if n%2 == 0:
    print("Even")
else:
    print("Odd")


## 78ms
if n&1:
    print("Odd")
else:
    print("Even")