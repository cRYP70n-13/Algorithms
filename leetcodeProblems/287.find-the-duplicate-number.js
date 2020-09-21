/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++)
		if (nums[i] === nums[i + 1])
			return nums[i];
	return false;
};
// @lc code=end

