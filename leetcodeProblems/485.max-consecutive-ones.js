/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let max = 0, max1 = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1)
			max1++;
		else
			max1 = 0;
		max = Math.max(max, max1);
	}
	return max;
};
// @lc code=end

