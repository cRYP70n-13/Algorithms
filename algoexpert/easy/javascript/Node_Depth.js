// Iterative approach
// O(n) time | O(1) space
const Node_Depth = root => {
	let sum = 0;
	let stack = [{"node": root, "depth": 0}];
	while (node.length > 0) {
		let nodeInfo = stack.pop();
		node = nodeInfo.node;
		depth = nodeInfo.depth;
		if (node === null)
			continue;
		sum += depth;
		stack.push({ "node": node.left, "depth": depth + 1 });
		stack.push({ "node": node.right, "depth": depth + 1 });
	}
	return sum;
}

// recursive approach
// O(n) time | O(h) space
const depth_node = (root, depth = 0) => {
	// handle the base case of recursion
	if (root === null) return 0;
	return depth + depth_node(root.left, depth + 1) + depth_node(root.right, depth + 1);
}