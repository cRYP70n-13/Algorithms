/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let start = 0, high = nums.length - 1, mid = 0;
	while (start <= high) {
		mid = Math.floor((start + high) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (target > nums[mid]) {
			start = mid + 1;
		} else if (target < nums[mid]) {
			high = mid - 1;
		}
  	}
	return start;
};
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], -2));
