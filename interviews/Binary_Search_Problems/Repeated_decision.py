from itertools import groupby
"""
Given a string s, repeatedly delete the earliest consecutive duplicate characters.
Constraints:
 	n≤ 100, 000 where n is the length of s.
Example 1
 	Input:
		s = "abbbaac"
 	Output:
		"c"
 	Explanation:
 		"bbb"
 		are the earliest consecutive duplicate characters which gets deleted.So we have "aaac".
 		"aaa"
 		then gets deleted to end up with "c".
"""


def solve(s):
    stack = []  # stack of [char, count]'s
    for k, grp in groupby(s):
        length = len(list(grp))
        if not stack or stack[-1][0] != k:
            stack.append([k, length])
        else:
            stack[-1][1] += length

        while stack and stack[-1][1] > 1:
            stack.pop()

    return "".join(c for c, count in stack for _ in range(count))

print(solve('aaaabbbbc'))