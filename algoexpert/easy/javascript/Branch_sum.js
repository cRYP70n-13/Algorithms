class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const branchSum = (root) => {
	let sums = [];
	_calculateBranchSum(root, 0, sums);
	return sums;
}

const _calculateBranchSum = (node, runningSum, sums) => {
	if (node === null) return;
	let newRunningSum = runningSum + node.value;
	if (node.left === null && node.right === null) {
		sums.push(newRunningSum);
		return;
	}
	return _calculateBranchSum(node.left, newRunningSum, sums),
		_calculateBranchSum(node.right, newRunningSum, sums);
}