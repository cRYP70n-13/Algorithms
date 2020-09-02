/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let len = nums.length;
	if (len == 0) return -1;
	if (len == 1) return target == nums[0] ? 0 : -1;
	let left = 0, right = len - 1, center = Math.floor((len - 1) / 2);
	while (left < right) {
		if (nums[left] <= nums[center]) {
		if (nums[left] <= target && target <= nums[center])
			right = center;
		else
			left = center + 1;

		} else {
		if (nums[center] < target && target <= nums[right])
			left = center + 1;
		else
			right = center;
		}
		center = Math.floor((right + left) / 2);
		if (nums[center] === target) return center;
	}
  return -1;
};
// @lc code=end

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));