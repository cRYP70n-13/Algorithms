# this is a more optimal solution for this problem
# O(n) time | O(1) space complexity

def validate_Subsquenece(array, subArray):
	j = 0
	for i in range(len(array)):
		if array[i] == subArray[j]:
			j += 1
	return j == len(subArray)

print(validate_Subsquenece([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 7, -1, 10]))