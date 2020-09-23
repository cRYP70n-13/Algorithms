/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
	let i = 0;
	let j = 0;
	let k = 0;
	while (S[i] && J[j]) {
		while (S[i]) {
			if (S[i] == J[j])
				k++;
			i++;
		}
		i = 0;
		j++;
	}
	return k;
};
// @lc code=end

