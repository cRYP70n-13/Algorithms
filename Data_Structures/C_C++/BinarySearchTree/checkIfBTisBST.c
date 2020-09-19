#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

struct	node {
    int data;
    struct node *left;
    struct node *right;
};

/*
 * The first method is simple BUT IT'S WRONG
int isBSTWrong(struct node* node)
{
    if (node == NULL)
	return 1;

    if (node->left != NULL && node->left->data > node->data)
	return 0;

    if (node->right != NULL && node->right->data < node->data)
	return 0;

    if (!isBST(node->left) || !isBST(node->right))
	return 0;

    return 1;
}

// This Algorithms is correct but it's not efficient
int isBSTNotEfficient(struct node* node)
{
    if (!node)
	return 1;

    if (node->left != NULL && maxValue(node->left) > node->data)
	return 0;

    if (node->right != NULL && minValue(node->right) < node->data)
	return 0;

    if (!isBST(node->left) || !isBST(node->right))
	return 0;

    return 1;
}
 */

int	isBSTUtil(struct node *node, int min, int max)
{
    if (!node) return 1;

    /* false if this node violates the min/max constraint */
    if (node->data < min || node->data > max)
	return 0;

    /* otherwise check the subtrees recursively,
     * tightening the min or max constraint */
    return isBSTUtil(node->left, min, node->data - 1) &&
	isBSTUtil(node->right, node->data + 1, max);
}

int	isBST(struct node *node)
{
    return(isBSTUtil(node, INT_MIN, INT_MAX));
}

// Just a small simplification of the above function
int	isBST(Node *root, Node *l = NULL, Node *r = NULL)
{
    if (root == NULL)
        return 1;

    // if left node exist then check it has
    // correct data or not i.e. left node's data
    // should be less than root's data
    if (l != NULL && root->data <= l->data)
        return 0;

    // if right node exist then check it has
    // correct data or not i.e. right node's data
    // should be greater than root's data
    if (r != NULL && root->data >= r->data)
        return 0;

    // check recursively for every node.
    return isBST(root->left, l, root) &&
           isBST(root->right, root, r);
}

struct node *newNode(int data)
{
    struct node *node = malloc(sizeof(struct node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;

    return(node);
}

int main()
{
    struct node *root = newNode(4);
    root->left        = newNode(2);
    root->right       = newNode(5);
    root->left->left  = newNode(1);
    root->left->right = newNode(3);

    if(isBST(root))
	printf("Is BST");
    else
	printf("Not a BST");
    return 0;
}
