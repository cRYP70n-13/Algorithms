def mincostClimbingStairs(nums):
    for i in range(2, len(nums)):
        nums[i] = min(nums[i - 2], nums[i - 1])
    return min(nums[len(nums) - 2], nums[len(nums) - 1])

# But to be honest I didn't understand WTF is this problem for actually