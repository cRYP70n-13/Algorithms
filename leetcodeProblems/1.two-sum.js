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

		// Return the first position of the occurence of complement in the nums
		// in the fail case it returns -1;
		const found = nums.indexOf(complement, i + 1);
		if (found !== -1)
			return [i, found];
	}
	return [0, 0];
};
// @lc code=end

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13));
