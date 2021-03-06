#include <bits/stdc++.h>

using namespace std;

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

class node
{
    public:
    int data;
    node* left;
    node* right;

    node(int data)
    {
        this->data = data;
        this->left = NULL;
        this->right = NULL;
    }
};

int isBSTUtil(node* node, int min, int max)
{
    if (!node)
        return 1;

    /* false if this node violates
    the min/max constraint */
    if (node->data < min || node->data > max)
        return 0;

    /* otherwise check the subtrees recursively,
    tightening the min or max constraint */
    return
        isBSTUtil(node->left, min, node->data-1) &&
        isBSTUtil(node->right, node->data+1, max);
}

int isBST(node* node)
{
    return(isBSTUtil(node, INT_MIN, INT_MAX));
}

int main()
{
    node *root = new node(4);
    root->left = new node(2);
    root->right = new node(5);
    root->left->left = new node(1);
    root->left->right = new node(3);

    if(isBST(root))
        cout<<"Is BST";
    else
        cout<<"Not a BST";

    return 0;
}
