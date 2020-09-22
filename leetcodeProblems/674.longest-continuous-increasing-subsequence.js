/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	let cnt = 1;
	let maxCnt = 1;
	if (nums.length === 0) return 0;
    for (let i = 0; i < nums.length; i++) {
		if (nums[i + 1] > nums[i]) {
			cnt++;
			maxCnt = Math.max(cnt, maxCnt);
		} else {
			cnt = 1;
		}
	}
	return maxCnt;
};
// @lc code=end

