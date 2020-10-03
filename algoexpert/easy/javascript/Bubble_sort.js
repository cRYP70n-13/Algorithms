const bubbleSort = nums => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] >= nums[j]) {
				let tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}
		}
	}
	return nums;
}

console.log(bubbleSort([2, 3, 1, 5, 4, 8, 7]));