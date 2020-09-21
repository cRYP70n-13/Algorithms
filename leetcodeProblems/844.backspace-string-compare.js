/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
	const fn = txt => {
		let ans = [];
		for (let c in txt) {
			if (c != '#')
				ans.push(c);
			else if (!ans.empty())
				ans.pop();
		}
		return ans.join('');
	}
	return fn(S) === fn(T);
};
// @lc code=end

console.log(backspaceCompare("xywrrmu#p", "xywrrmp"));