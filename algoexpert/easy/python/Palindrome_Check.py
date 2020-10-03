def CheckPalindrome(str):
	return str[::-1] == str

# Solution 2
# O(n) space | O(n) extra space memory
# we used an extra space memory a stack
def is_palindrome(str):
	reversed_str = []
	for i in reversed(range(len(str))):
		reversed_str.append(str[i])
	return str == "".join(reversed_str)

# Solution 3
# and I think this is the most optimal solution
# over all the other ones
# O(n) space | O(1) extra space memory
def is_pal(str):
	left_index = 0
	right_index = len(str) - 1
	while left_index < right_index:
		if str[left_index] != str[right_index]:
			return False
		left_index += 1
		right_index -= 1
	return True

print(CheckPalindrome("abcdcba"))
print(is_palindrome("abcdcba"))
print(is_pal("abcdcba"))
