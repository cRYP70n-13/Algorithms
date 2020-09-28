#include <bits/stdc++.h>

using namespace std;

struct	Node {
    int data;
    struct Node *left;
    struct Node *right;
};

int	findMin(Node *root)
{
    if (!root) return NULL;
    while (root->left)
	root = root->left;
    return root->data;
}

int	findMax(Node *root)
{
    if (!root) return NULL;
    while (root->right)
	root = root->right;
    return root->data;
}

int	main(void)
{
    // test;
    return (0);
}
