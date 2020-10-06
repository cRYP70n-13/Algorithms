class BST:
	def __init__(self, value):
		self.value = value
		self.left = None
		self.right = None

	def insert(self, value):
		if value < self.value:
			if self.left is None:
				self.left = BST(value)
			else:
				self.left.insert(value)
		else:
			if self.right is None:
				self.right = BST(value)
			else:
				self.right.insert(value)
		return self


def findClosestValueInBst(root, target):
	return _findClosestValueHelper(root, target, float("inf"))

# the recursive approach
def _findClosestValueHelper(root, target, closest):
	if root is None:
		return closest
	if abs(target - closest) > abs(root.value - target):
		closest = root.value
	if target < root.value:
		return _findClosestValueHelper(root.left, target, closest)
	elif target > root.value:
		return _findClosestValueHelper(root.right, target, closest)
	else:
		return closest


test_tree = BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22) \
    .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000) \
    .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203) \
    .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500)


closest_val = findClosestValueInBst(test_tree, 22)
print(str(closest_val) + " is the Closest Value")
