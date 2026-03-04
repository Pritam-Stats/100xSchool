marks = int(input())
if marks>90:
    print("Excellent")
elif marks>80 and marks <= 90:
    print("Good")
elif marks > 70 and marks <= 80:
    print("Fair")
elif marks >60 and marks <= 70:
    print("Meets Expectations")
else:
    print("Below Par")