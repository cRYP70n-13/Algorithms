#include <bits/stdc++.h>

using namespace std;

struct Node {
    int data;
    Node *left;
    Node *right;
};

Node    *newNode(int data)
{
    Node *new_node = new Node();
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
}

Node    *Insert(Node *root, int data)
{
    if (!root)
        root = newNode(data);
    else if (root->data >= data)
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
    else if (root->data <= data)
        return Search(root->right, data);
    else
        return Search(root->left, data);
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
	// Ask user to enter a number.
	int number;
	cout << "Enter number be searched\n";
	cin >> number;
	// If number is found, print "FOUND"
	if (Search(root, number)) cout << "Found\n";
	else cout << "Not Found\n";
}
