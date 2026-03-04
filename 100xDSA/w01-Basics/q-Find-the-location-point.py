from sys import stdin
input = stdin.readline
##input - single line containing two integers
x, y = list(map(int, input().split()))

if (x == 0 and y == 0):
    print('Origin')
elif (x==0 and y != 0):
    print("Y axis")
elif (y == 0 and x != 0):
    print("X axis")
elif (x>0):
    if (y>0):
        print("1st Quadrant")
    else:
        print("4th Quadrant")
else:
    if (y>0):
        print("2nd Quadrant")
    else:
        print("3rd Quadrant")
    

