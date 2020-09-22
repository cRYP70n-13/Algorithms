/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
	const ans = [];
	let bin = 0;
	for (let i = 0; i < A.length; i++) {
		bin = BigInt(bin) * BigInt(2) + BigInt(A[i]);
		ans[i] = (bin % BigInt(5) == 0);
	}
	return ans;
};
// @lc code=end

console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));