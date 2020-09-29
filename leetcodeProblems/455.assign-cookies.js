/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);
	let ans = 0;
	let i = 0;

	for (let num of s) {
		if (num >= g[i]) {
			ans++;
			i++;
		}
	}
	return ans;
};
// @lc code=end

console.log(findContentChildren([1, 2, 3], [1, 1]));