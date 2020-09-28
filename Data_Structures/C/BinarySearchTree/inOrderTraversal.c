#include <stdio.h>
#include <stdlib.h>

struct Node {
    char data;
    struct Node *left;
    struct Node *right;
};

void    inOrder(struct Node *root)
{
    if (!root) return;
    inOrder(root->left);
    printf("%c ", root->data);
    inOrder(root->right);
}

struct Node     *newNode(int data)
{
    struct Node *new_node = malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
}

// Function to Insert Node in a Binary Search Tree
struct Node    *Insert(struct Node *root, char data) {
	if (!root)
        root = newNode(data);
	else if (data <= root->data)
		root->left = Insert(root->left,data);
	else
		root->right = Insert(root->right,data);
	return root;
}

int     main() {
/*Code To Test the logic

Creating an example tree
	    M
	   / \
	  B   Q
	 / \   \
	A   C   Z
*/
	struct Node *root = NULL;
	root = Insert(root,'M'); root = Insert(root,'B');
	root = Insert(root,'Q'); root = Insert(root,'Z');
	root = Insert(root,'A'); root = Insert(root,'C');
	//Print Nodes in Preorder.
	printf("inOrder: ");
	inOrder(root);
	printf("\n");
	return (0);
}
