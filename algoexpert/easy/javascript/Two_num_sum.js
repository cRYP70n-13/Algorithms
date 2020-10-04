// this is the first solution that i Know

const TwoSum = (arr, n) => {
	for (let i = 0; i <= arr.length; i++) {
		let complement = n - arr[i];

		const found = arr.indexOf(complement, i + 1);
		if (found !== -1)
			return [arr[i], arr[found]];
	}
	return [0, 0];
}

// We can also do it in another clever way
// O(nlogn) time | O(1) space
const cleverTwoSum = (arr, target) => {
	arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let current_sum = arr[left] + arr[right];
		if (current_sum === target)
			return [arr[left], arr[right]];
		else if (current_sum > target)
			right--;
		else if (current_sum < target)
			left++;
	}
	return [];
}

console.log(cleverTwoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));