def FindThreeLargestNums(arr):
	arr.sort()
	return [arr[len(arr) - 1], arr[len(arr) - 2], arr[len(arr) - 3]]

# we can also here us a stack and three variables and keep track of the max of them one by one
print(FindThreeLargestNums([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
