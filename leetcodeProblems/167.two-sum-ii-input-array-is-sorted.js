/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	for (let i = 0; i < numbers.length; i++) {
		let rest = target - numbers[i];
		const found = numbers.indexOf(rest, i + 1);
		if (found !== -1)
			return [i + 1, found + 1];
	}
	return [0, 0];
};
// @lc code=end

