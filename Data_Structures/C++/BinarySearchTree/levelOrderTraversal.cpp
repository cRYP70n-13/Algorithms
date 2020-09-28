#include <bits/stdc++.h>

using namespace std;

struct  Node {
    char data;
    Node *left;
    Node *right;
};

void    levelOrder(Node *root)
{
    if (!root) return ;

    // A queue to reserve the addresses of the child Nodes in the subtree
    queue<Node *> Q;

    // Pushing the root to the Queue;
    Q.push(root);

    while (!Q.empty()) {
        Node *current = Q.front();
        cout << current->data << " ";

        if (current->left)
            Q.push(current->left);
        if (current->right)
            Q.push(current->right);
        Q.pop(); // Removing the element from the front
    }
}

// Function to Insert Node in a Binary Search Tree
Node    *Insert(Node *root, char data) {
	if (!root) {
		root = new Node();
		root->data = data;
		root->left = root->right = NULL;
	}
	else if (data <= root->data)
        root->left = Insert(root->left,data);
	else
        root->right = Insert(root->right,data);
	return root;
}

int main() {
	/*Code To Test the logic
	  Creating an example tree
			    M
			   / \
			  B   Q
			 / \   \
			A   C   Z
    */
	Node* root = NULL;
	root = Insert(root,'M'); root = Insert(root,'B');
	root = Insert(root,'Q'); root = Insert(root,'Z');
	root = Insert(root,'A'); root = Insert(root,'C');
	//Print Nodes in Level Order.
	levelOrder(root);
}
