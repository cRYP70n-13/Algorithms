const FindThreeLargestNums = arr => {
	arr.sort((a, b) => a - b);
	return [arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3]];
}

// We can also use a straight forward algorithm three variable and the Max of them
console.log(FindThreeLargestNums([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));