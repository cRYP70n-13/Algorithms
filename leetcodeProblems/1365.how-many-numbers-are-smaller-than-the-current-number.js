/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		let n = 0;
		for (let j = 0; j < nums.length; j++)
			if (nums[i] > nums[j])
				n++;
		res.push(n);
	}
	return res;
};
// @lc code=end

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));