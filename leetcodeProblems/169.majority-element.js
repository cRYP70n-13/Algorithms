/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let n = Math.floor(nums.length / 2);
	nums.sort();
	return nums[n];
};
// @lc code=end

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1,1,1]))