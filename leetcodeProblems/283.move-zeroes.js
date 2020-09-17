/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let index = 0;
	for (let i = 0; i < nums.length; i++)
		if (nums[i] != 0)
			nums[index++] = nums[i];
	for (let i = index; i < nums.length; i++)
		nums[i] = 0;
};
// @lc code=end

console.log(moveZeroes([0, 1, 0, 3, 13]))