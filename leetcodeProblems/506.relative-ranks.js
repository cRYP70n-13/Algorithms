/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
	const original = [...nums];
	nums.sort((a, b) => b - a);
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		const index = original.indexOf(nums[i]);
		if (i === 0)
			result[index] = 'Gold Medal';
		else if (i === 1)
			result[index] = 'Silver Medal';
		else if (i === 2)
			result[index] = 'Bronze Medal';
		else
			result[index] = (i + 1).toString();
	}
	return result;
};
// @lc code=end