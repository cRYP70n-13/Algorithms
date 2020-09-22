/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function (A) {
	let odd = 1;
	let even = 0;
	let res = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 === 0) {
			res[even] = A[i];
			even += 2;
		} else {
			res[odd] = A[i];
			odd += 2;
		}
	}
	return res;
};
// @lc code=end