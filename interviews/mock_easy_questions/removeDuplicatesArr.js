const removeDuplicates = nums => {
    if (nums.length === 0 || nums.length === 1) return nums.length;
    let j = 0;
    let n = nums.length;
    for (let i = 0; i < n - 1; i++)
        if (nums[i] != nums[i + 1])
            nums[j++] = nums[i];
    nums[j++] = nums[n - 1];
    return j;
}

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 6]));
