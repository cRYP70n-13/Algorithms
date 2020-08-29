/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	let cnt = 0;
	const array = [];
	for (i = 2; i < n; i++) {
		if (array[i]) continue;
		else cnt++;
		for (j = i + i; j <= n; j += i) {
			array[j] = true;
		}
	}
	return cnt;
};
// @lc code=end

