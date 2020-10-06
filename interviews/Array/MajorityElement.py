def majorityElement(arr):
	n = len(arr) // 2
	arr.sort()
	return arr[n]