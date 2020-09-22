/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let leftSum = [nums[nums.length - 1]];
	let rightSum = [nums[0]];

	// left running sum
	for (let i = 1; i < nums.length; i++)
		rightSum.push(rightSum[i - 1] + nums[i]);

	// right running sum
	for (let i = nums.length - 2; i >= 0; i--)
		leftSum.unshift(leftSum[0] + nums[i]);

	let i = 0;
	//on any index i if value of leftSum == rightSum it means this is the equilibrium for this array 
	while (i < nums.length) {
		if (leftSum[i] == rightSum[i]) return i;
		i++;
	}
	return -1;
};
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));