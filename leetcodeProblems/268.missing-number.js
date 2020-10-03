/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
// 	const arr = new Array(nums.length + 1).fill(-1);
// 	for (let i of nums)
// 		arr[i] = i;
// 	return arr.indexOf(-1);
// };
// @lc code=end

const missingNumber = nums => {
	const mySet = new Set(nums);
	for (let i = 0; i < nums.length; i++)
		if (!mySet.has(i))
			return i;
}

/**
 * Also in the solution area I found a very good aproach
 * Which uses the guass formula to calculate the sum
 * of the list in constant time and return the differnce between
 * it and the actual sum of the list
 */

const usingGauss = nums => {
	let expectedSum = nums.length * (nums.length + 1) / 2;
	let sum = 0;
	for (let i = 0; i < nums.length; i++)
		sum += nums[i];
	return expectedSum - sum;
}


console.log(usingGauss([3, 0, 1]));