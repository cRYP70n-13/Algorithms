def longestSubSeq(nums):
    if not nums:
        return 0
    start, end, res = 0, 1, 1
    while (end < len(nums)):
        if nums[end] > nums[end - 1]:
            res = max(end - start + 1, res)
        else:
            start = end
        end += 1
    return res


print(longestSubSeq([1, 3, 5, 4, 7]))
