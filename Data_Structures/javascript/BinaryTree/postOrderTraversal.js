const PostOrderTraverse = (node) => {
   if (node !== null) {
     //Traverse the left subtree
     PostOrderTraverse(node.left);

     //Traverse the right subtree
     PostOrderTraverse(node.right);

     //Print the node
     console.log(node.key);
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
PostOrderTraverse(root);
