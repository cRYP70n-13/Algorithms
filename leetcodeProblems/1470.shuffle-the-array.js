/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let nums2 = [];
	let res = [];
	for (let i = n; i < nums.length; i++)
		nums2.push(nums[i]);
	for (let i = 0; i < nums.length; i++) {
		res.push(nums[i]);
		res.push(nums2[i]);
	}
	return res;
};