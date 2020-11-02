#
# @lc app=leetcode id=1051 lang=python3
#
# [1051] Height Checker
#

# @lc code=start
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        cnt = 0
        sorted_array = sorted(heights)

		# Here I felt like I need some python course
        for idx , i in enumerate(heights):
            if i != sorted_array[idx]:
                cnt += 1
        return cnt

# @lc code=end
