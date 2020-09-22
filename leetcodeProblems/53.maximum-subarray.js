/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let _helper = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		_helper = Math.max(nums[i], _helper + nums[i]);
		console.log(_helper);
		if (_helper > max)
			max = _helper;
	}
	return max;
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));