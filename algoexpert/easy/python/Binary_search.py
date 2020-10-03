def BinarySearch(nums, n):
	l = 0
	h = len(nums)
	while l < h:
		mid = (l + h) // 2
		if nums[mid] == n:
			return mid
		elif nums[mid] > n:
			h = mid
		else:
			l = mid + 1
	return -1


print(BinarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
