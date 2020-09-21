/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	let diff = Number.MAX_SAFE_INTEGER + 1;
	nums.sort((a, b) => a - b);
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		let low = i + 1;
		let high = n - 1;
		while (low < high) {
			let sum = nums[i] + nums[low] + nums[high];
			if (Math.abs(target - sum) < Math.abs(diff))
				diff = target - sum;
			if (target > sum)
				low++;
			else
				high--;
		}
	}
	return target - diff;
};
// @lc code=end

console.log(threeSumClosest([-1, 2, 1, -4], 0));