const InOrderTraverse = (node) => {
    if (node !== null) {
        //Traverse the left subtree
        InOrderTraverse(node.left);

        //Print the node
        console.log(node.key);

        //Traverse the right subtree
        InOrderTraverse(node.right);
    }
};

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(9);
tree.insert(15);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(16);

const root = tree.getRoot();
InOrderTraverse(root);
