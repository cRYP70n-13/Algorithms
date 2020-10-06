import math

def containsNearbyDuplicate_set(nums, k):
    s = set()
    for i in range(len(nums)):
        if nums[i] not in s:
            s.add(nums[i])
        else:
            if abs(i - nums.index(nums[i])) <= k:
                return True
            nums[nums.index(nums[i])] = - math.inf
    return False


print(containsNearbyDuplicate_set([1, 2, 3, 1, 2, 3], 2))
