const BinarySearch = (nums, target) => {
	let l = 0;
	let h = nums.length;
	while (l < h) {
		let mid = Math.floor((l + h) / 2);
		if (nums[mid] === target)
			return mid;
		else if (nums[mid] > target)
			h = mid;
		else
			l = mid + 1;
	}
	return -1;
}

console.log(BinarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));