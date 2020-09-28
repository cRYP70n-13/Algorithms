/*
 * @lc app=leetcode id=985 lang=javascript
 *
 * [985] Sum of Even Numbers After Queries
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
	let res = [];
	let evenSum = 0;

	for (let elem of A)
		if (elem % 2 == 0) evenSum += elem; //this is the original even sum

	for (let i = 0; i < A.length; i++) {
		let val = queries[i][0],
			index = queries[i][1];
		let sum = val + A[index];

		if (sum % 2 == 0)
			A[index] % 2 == 0 ? evenSum += val : evenSum += (val + A[index]);
		else
			A[index] % 2 == 0 ? evenSum -= A[index] : false;
		A[index] += val;
		res[i] = evenSum;
	}
	return res;
};
// @lc code=end