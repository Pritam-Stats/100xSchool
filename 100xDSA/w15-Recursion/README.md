It’s a bit of a "brain teaser" because of how the Recursion Stack works. Even though you start the calls from the back, the comparisons happen from the front.
Think of it like this: You are standing at the end of a long line of people. You want to find the first person wearing a red hat.
1. You (at index n-1) don't look at the person in front of you yet. Instead, you tap them on the shoulder and say, "Go ask the person in front of you if there's a red hat earlier in the line."
2. This continues until the message reaches the very first person (index 0).
3. The first person finally checks their hat. They are the first to "return" an answer.
4. The message then travels backwards to you.
Visualizing the "Unwinding"
When you write smallAns = yield f(a, n-1, x), you are telling the code: "Wait! Don't do anything else until the entire rest of the array (closer to the start) has finished checking."
Here is the step-by-step logic of why smallAns is the "first" occurrence:
• The Dive: Your code dives deep: f(n) calls f(n-1), which calls f(n-2)... all the way to f(0). No comparisons have happened yet.
• The Base Case: f(0) returns -1.
• The Climb (The First Element): Now f(1) (representing a[0]) gets that -1. It checks: "Did the previous calls find anything? No (smallAns is -1). Okay, let me check myself. Is a[0] == X?" If yes, it returns 1.
• The Climb (The Second Element): Now f(2) (representing a[1]) receives the answer from f(1). • If f(1) found a match, smallAns is now 1. • This is where the if smallAns != -1 is crucial. Since smallAns is 1, f(2) says "Someone earlier already found it! I'll just pass that 1 along and ignore my own value (a[1])."
The "Aha!" Moment
By checking the smallAns before checking your current element a[n-1], you are giving priority to the results coming from the beginning of the array.
If you did it the other way around:
if a[n-1] == x:
    smallAns = n
else:
    smallAns = yield f(a, n-1, x)

That would find the last occurrence, because you would be checking the back of the array and only recursing if you didn't find a match there.
Summary
• Recursive Call: Goes to the front of the line.
• SmallAns: The result "from the front."
• The If-Check: Ensures that if the "front" found something, we keep it and stop looking at the "back."
Does that help visualize why the answer from the deeper call is actually the one from the "earlier" part of the array?