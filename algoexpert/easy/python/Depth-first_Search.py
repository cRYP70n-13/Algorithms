class Node:
	def __init__(self, name):
		self.children = []
		self.name = name
	
	def addChild(self, child):
		self.children.append(Node(child))
		return self
	
	# O(v + E) time (Number of vertices and number of edges) | O(v) space
	def depthFirstSearch(self, array):
		array.append(self.name)
		for child in self.children:
			child.depthFirstSearch(array)
		return array


result1 = []
test1 = Node("A")
test1.addChild("B").addChild("C")
test1.children[0].addChild("D")
print(test1.depthFirstSearch(result1))

result2 = []
test2 = Node("A")
test2.addChild("B").addChild("C").addChild("D").addChild("E")
test2.children[1].addChild("F")
print(test2.depthFirstSearch(result2))
