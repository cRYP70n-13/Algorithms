/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for (let i = 0; i <= nums.length; i++) {
		let complement = target - nums[i];

		const found = nums.indexOf(complement, i + 1);
		if (found !== -1)
			return [i, found];
	}
	return [0, 0];
};
// @lc code=end

