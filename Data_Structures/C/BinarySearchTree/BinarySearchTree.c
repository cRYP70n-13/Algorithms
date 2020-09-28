#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node    *newNode(int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

Node    *Insert(Node *root, int data)
{
    if (!root) root = newNode(data);
    else if (data <= root->data)
        root->left = Insert(root->left, data);
    else
        root->right = Insert(root->right, data);
    return root;
}

Node    *Search(Node *root, int data)
{
    if (!root) return NULL;
    else if (root->data == data)
        return root;
    else if (root->data >= data)
        return Search(root->left, data);
    else
        return Search(root->right, data);
}

int main() {
	Node *root = NULL;
	/*Code to test the logic*/
	root = Insert(root, 15);
	root = Insert(root, 10);
	root = Insert(root, 20);
	root = Insert(root, 25);
	root = Insert(root, 8);
	root = Insert(root, 12);

	int number;
	printf("Enter number be searched\n");
	scanf("%d", &number);

	if (Search(root,number)) printf("Found\n");
	else printf("Not Found\n");
}
