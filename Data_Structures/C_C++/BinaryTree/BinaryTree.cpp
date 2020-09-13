#include <iostream>

struct Node {
    int val;
    struct Node *left;
    struct Node *right;
};

struct Node     *newNode(int data)
{
    struct Node *new_node = malloc(sizeof(struct Node));
    new_node->val = data;
    new_node->left = NULL;
    new_node->right = NULL;

    return (new_node);
}

int     main(void)
{
    struct Node *root = newNode(1);
    root->left = newNode(3);
    root->right = newNode(5);

    root->left->right = newNode(8);
    root->left->left = newNode(7);

    root->right->left = newNode(19);
    root->right->right = newNode(28);

    return (0);
}
