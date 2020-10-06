class Node:
	def __init__(self, value):
		self.val = value
		self.left = None
		self.right = None


# Probably we gonna do it using recursive
# O(n) time | O(log(n)) space complexity

def BranchSum(root):
	sums = []
	_calculateBranchSum(root, 0, sums)
	return sums

def _calculateBranchSum(node, runningSum, sums):
	if node is None:
		return
	newRunningSum = runningSum + node.val
	if node.left is None and node.rigth is None:
		sums.append(newRunningSum)
		return
	return _calculateBranchSum(node.left, newRunningSum, sums)
	return _calculateBranchSum(node.right, newRunningSum, sums)
