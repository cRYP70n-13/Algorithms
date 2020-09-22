/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = arr => {
	const sum = (a, b) => arr[b] - (arr[a - 1] || 0);

	let total = 0;

	// We first use the prefix some technic to avoid soing it manually in the code
	for (let i = 1; i < arr.length; i++)
		arr[i] += arr[i - 1];

	for (let start = 0; start < arr.length; start++)
		for (let end = start; end < arr.length; end += 2)
			total += sum(start, end);

	return total;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
