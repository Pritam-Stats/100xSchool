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
        A = list(map(int, input().split())) if n > 0 else []
        m = int(input())
        B = list(map(int, input().split())) if m > 0 else []


        intersection = []
        freq = {}
        for x in B:
            freq[x] = freq.get(x, 0) + 1
            debug(x = x, freq = freq)
        

        for x in A:
            debug(a = A, x = x, freqx = freq.get(x, 0))
            if freq.get(x, 0) > 0:
                intersection.append(x)
                freq[x] -= 1
                debug(freqx = freq[x])
        print(*intersection)
            

        


# ============ accepted solution #=============
        # for x in A:
        #     debug(inside_for_loop_A=A, B=B, intersection=intersection)
        #     if x in B:
        #         debug(x=x)
        #         intersection.append(x)
        #         # we need to update B simultaneously
        #         B.remove(x)
        #         debug(at_endOf_if_B=B)
        # print(*intersection)

if __name__ == "__main__":
    solve()
