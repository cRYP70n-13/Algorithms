def findDesapearedElement(nums):
	hash_table = {}
	result = []

	for num in nums:
		hash_table[num] = 1
	
	for num in range(1, len(nums) + 1):
		if num not in hash_table:
			result.append(num)

	return result