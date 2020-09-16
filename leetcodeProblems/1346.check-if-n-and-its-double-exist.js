/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	// but this is a dammy solution O(n^2);
	// I think I have to see if there is a better solution
	if (arr[0] === 0 && arr[1] === 0) return true;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++)
			if (arr[i] === 2 * arr[j] && arr[i] !== 0)
				return true;
	}
	return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	if (arr[0] === 0 && arr[1] === 0) return true;
	var set = new Set(arr);
	for (let n of arr) {
		if (set.has(2 * n) && n !== 0)
			return true;
	}
	return false;
};
// @lc code=end

console.log(checkIfExist([7, 1, 14, 11]));