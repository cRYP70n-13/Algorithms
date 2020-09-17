/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	const arr = new Array(nums.length + 1).fill(-1);
	for (let i of nums)
		arr[i] = i;
	return arr.indexOf(-1);
};
// @lc code=end

