/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let index = 1;
	for (let i = 0; i < nums.length -1; i++)
		if (nums[i] !== nums[i + 1])
			nums[index++] = nums[i + 1];
	return index;
};
// @lc code=end

