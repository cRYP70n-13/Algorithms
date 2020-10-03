const TwoSum = (arr, n) => {
	for (let i = 0; i <= arr.length; i++) {
		let complement = n - arr[i];

		const found = arr.indexOf(complement, i + 1);
		if (found !== -1)
			return [arr[i], arr[found]];
	}
	return [0, 0];
}

console.log(TwoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));