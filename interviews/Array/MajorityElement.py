def majorityElement(nums):
    nums.sort()
    return nums[len(nums) // 2]

print(majorityElement([2, 2, 2, 2, 3, 3, 456, 57, 65,76, 67, 7, 2, 2, 2, 2, 2, 2]))