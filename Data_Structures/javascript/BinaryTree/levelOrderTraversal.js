//Get height of the tree
const treeHeight = node => {
    //If null return 0
    if (node === null)
        return 0;

    //Get left sub tree height
    const leftHeight = treeHeight(node.left);

    //Get right sub tree height
    const rightHeight = treeHeight(node.right);

    //Return the max of them
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

//Print all the nodes
const printNode = (node, level) => {
    //If null return
    if (node === null)
        return;

    //If at node print the data
    if (level === 1)
        console.log(node.key)

    //Else recursively print all the nodes at each level
    if (level > 1) {
        printNode(node.left, level - 1)
        printNode(node.right, level - 1);
    };
}

const levelOrderTraversal = node => {
    const height = treeHeight(node);

    //Print node at each level
    for (let i = 1; i <= height; i++)
        printNode(node, i);
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(9);
tree.insert(15);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(16);

const root = tree.getRoot();
levelOrderTraversal(root);
