class newNode:
	def __init__(self, key):
		self.data = key
		self.left = None
		self.right = None


def isBST(root, l=None, r=None):

	if (root == None):
		return True

	# if left node exist then check it has
	# correct data or not i.e. left node's data
	# should be less than root's data
	if (l != None and root.data <= l.data):
		return False

	# if right node exist then check it has
	# correct data or not i.e. right node's data
	# should be greater than root's data
	if (r != None and root.data >= r.data):
		return False

	return isBST(root.left, l, root) and \
		isBST(root.right, root, r)


if __name__ == '__main__':
	root = newNode(3)
	root.left = newNode(2)
	root.right = newNode(5)
	root.right.left = newNode(1)
	root.right.right = newNode(4)

	if (isBST(root, None, None)):
		print("Is BST")
	else:
		print("Not a BST")
