/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
	const res = [];
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		let j = i;
		while (s[j + 1] === char) j++;
		if (j - i > 1)
			res.push([i, j]);
		i = j;
	}
	return res;
};
// @lc code=end

