const findClosestValueBst = (tree, target) => {
	return _findClosestValueHelper(tree, target, Number.MAX_SAFE_INTEGER);
}

// this is the recursive approach
const _findClosestValueHelper = (tree, target, closest) => {
	if (tree === null)
		return closest;
	if (Math.abs(target - closest) > Math.abs(tree.value - taregt))
		closest = tree.value;
	if (tree.value > target)
		return _findClosestValueHelper(tree.left, target, closest);
	else if (tree.value < target)
		return _findClosestValueHelper(tree.right, target, closest);
	else
		return closest;
}
