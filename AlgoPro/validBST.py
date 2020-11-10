class Node:
	def __init__(self, value):
		self.value = value
		self.left = None
		self.right = None


def isBST(root, left = None, right = None):
	if not root:
		return True

	if (left != None and root.value <= left.value):
		return False

	if (right != None and root.value >= right.value):
		return False

	return isBST(root.left, left, root) and \
		isBST(root.right, root, right)


if __name__ == '__main__':
	root = Node(5)
	root.left = Node(3)
	root.right = Node(19)
	# root.right.left = Node(90)
	# root.right.right = Node(1)

	if (isBST(root, None, None)):
		print("It's a BST")
	else:
		print("It's not a BST")