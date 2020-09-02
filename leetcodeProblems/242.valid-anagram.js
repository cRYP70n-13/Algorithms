/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	let myMap = {};
	for (let i of s)
	 myMap[i] = ++myMap[i] || 1;
	for (let char of t) {
		if (!myMap[char]) return false;
	 myMap[char]--;
	}
	return true;
};
// @lc code=end

