# Solution 1
# O(N^2) time | O(1) space
def twoSum(arr, target):
	result = []
	for i in range(0, len(arr) - 1):
		first_num = arr[i]
		for j in range(i + 1, len(arr)):
			second_num = arr[j]
			sum = first_num + second_num
			if sum == target:
				result.append(first_num)
				result.append(second_num)
	return result

# Solution 2
# O(n) time | O(n) space complexity
def TwoSum_2(array, target):
	result_arr = []
	for i in range(0, len(array) - 1):
		first_num = array[i]
		second_exptected_num = target - first_num
		second_array = array[i + 1 : len(array)]
		if second_exptected_num in second_array:
			result_arr.append(first_num)
			result_arr.append(second_exptected_num)
	
	return result_arr

# solution 3
# O(nlogn) time | O(1) space complexity
# and this is the most optimal solution for it

def optimal_two_sum(arr, target):
	arr.sort()
	left = 0
	right = len(arr) - 1
	while left < right:
		current_sum = arr[left] + arr[right]
		if current_sum == target:
			return [arr[left], arr[right]]
		elif current_sum < target:
			left += 1
		elif current_sum > target:
			right -= 1
	return []


print(optimal_two_sum([5, 3, -4, 8, 11, 1, -1, 6], 10))