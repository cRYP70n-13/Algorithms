/** 
 * O(nlog(n)) time | O(1) space
 * this is not the most optimal way
 */
const FindThreeLargestNums = arr => {
	arr.sort((a, b) => a - b);
	return [arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3]];
}

// We can also use a straight forward algorithm three variable and the Max of them
const findThreeLargestNums = arr => {
	let res = [null, null, null];
	for (let i = 0; i < arr.length; i++)
		_updateLargest(res, arr[i]);
	return res;
}

const _updateLargest = (arr, num) => {
	if (arr[2] == null || num > arr[2])
		shiftAndUpdate(arr, num, 2);
	else if (arr[1] === null || num > arr[1])
		shiftAndUpdate(arr, num, 1);
	else if (arr[0] === null || num > arr[0])
		shiftAndUpdate(arr, num, 0);
}

const shiftAndUpdate = (arr, num, index) => {
	for (let i = 0; i < index + 1; i++) {
		if (i === index)
			arr[i] = num;
		else
			arr[i] = arr[i + 1];
	}
}

console.log(findThreeLargestNums([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));