import sys
input = sys.stdin.readline

DEBUG = False


def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split())) if n > 0 else []
        x = int(input())  # target

# ============ Optimized ==============
        






#      ============ Better O(n2) ============= for each iteration calculate two sum
        # count = 0
        # for i in range(n):
        #     freqMap = {}
        #     target = x - nums[i]
        #     for j in range(i+1, n):
        #         comp = target - nums[j]
        #         count += freqMap.get(comp, 0)
        #         freqMap[nums[j]] = freqMap.get(nums[j], 0) + 1
        
        # print(count)


    #======== Brute Force O(N3)===========
        # count = 0
        # for i in range(n):
        #     for j in range(i+1, n):
        #         for k in range(j+1, n):
        #             if nums[i] + nums[j] + nums[k] == x:
        #                 count += 1

        # print(count)


if __name__ == "__main__":
    solve()
