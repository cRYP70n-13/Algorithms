#
# @lc app=leetcode id=4 lang=python3
#
# [4] Median of Two Sorted Arrays
#

# @lc code=start
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        res = 0
        sorted_arrays = sorted(nums1 + nums2)
        length = len(sorted_arrays)
        mid = len(sorted_arrays) // 2

        if length % 2 == 0:
            res = (sorted_arrays[mid - 1] + sorted_arrays[mid]) / 2
        else:
            res = sorted_arrays[mid]

        return res
        
# @lc code=end

