/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let count = ransomNote.length;
	for (i = 0; i < ransomNote.length; i++) {
		if (magazine.indexOf(ransomNote.split('')[i]) !== -1) {
			count--;
			// this is to avoid the doubles problem
			magazine = magazine.replace(ransomNote.split('')[i], '');
		}
	}
	return count === 0;
};
// @lc code=end