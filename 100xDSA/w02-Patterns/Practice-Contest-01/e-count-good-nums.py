from sys import stdin
input = stdin.readline

n = int(input())
nums = list(map(int, input().split()))

count = 0
for x in nums:
    if x != 0:
        if 18%x == 0 or x % 45 == 0:
            count += 1
    else:
        count += 1
    
    # 0 can't be a factor but is a multiple of 45 or any number
print(count)
