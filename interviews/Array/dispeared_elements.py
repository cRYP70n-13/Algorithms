def disappeared_elements(arr, n):
	rightSum = 0
	sum = 0

	# This is the guass elimination approach to calculate the hole sum in a list
	rightSum = (n + 1) * (n + 2) / 2

	for i in arr:
		sum += i

	return rightSum - sum


arr = [1, 2, 3, 4, 5, 6, 8, 9]
print(disappeared_elements(arr, 8))