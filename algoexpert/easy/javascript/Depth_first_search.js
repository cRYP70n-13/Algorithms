class Node{
	constructor(this, name) {
		this.children = [];
		this.name = name;
	}

	add_child = (this, child) => {
		this.children.push(Node(child));
		return this;
	}

	depth_first_search = (this, array) => {
		array.push(this.name);
		for (const child of children)
			child.depth_first_search(array);
		return array;
	}
}