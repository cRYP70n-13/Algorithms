# Iterative approach
# O(n) time | O(1) space

def node_depth(root):
	sum = 0
	stack = [{"node": root, "depth": 0}]
	while len(stack) > 0:
		nodeInfo = stack.pop()
		node, depth = nodeInfo["node"], nodeInfo["depth"]
		if node is None:
			continue
		sum += depth
		stack.append([{"node": root.left, "depth": depth + 1}])
		stack.append([{"node": root.right, "depth": depth + 1}])
	return sum

# Recursive approach
# O(n) time | O(h) space

def depth_node(root, depth=0):
	if root is None:
		return 0
	return depth + depth_node(root.left, depth + 1) + depth_node(root.right, depth + 1)