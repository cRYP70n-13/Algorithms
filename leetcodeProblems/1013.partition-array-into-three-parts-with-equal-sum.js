/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
	let sum = 0;
	let i = 0;
	let cnt = 0;
	let check = 0;

	arr.forEach(val => sum += val);
	if (sum / 3 !== Math.floor(sum / 3)) return false;
	sum = Math.floor(sum / 3);

	while (i <= arr.length) {
		if (check !== sum) {
			check += arr[i];
		} else {
			check = arr[i];
			cnt++;
		}
		i++;
	}
	return cnt === 3;
};
// @lc code=end

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));