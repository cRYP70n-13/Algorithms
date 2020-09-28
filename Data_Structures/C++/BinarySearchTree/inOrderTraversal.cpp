#include<iostream>

using namespace std;

struct Node {
	char data;
	struct Node *left;
	struct Node *right;
};

//Function to visit nodes in Inorder
void	Inorder(Node *root) {
	if(root == NULL) return;

	Inorder(root->left);       //Visit left subtree
	printf("%c ",root->data);  //Print data
	Inorder(root->right);      // Visit right subtree
}

// Function to Insert Node in a Binary Search Tree
Node *Insert(Node *root,char data) {
	if (root == NULL) {
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

int	main() {
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
    cout<<"Inorder: ";
    Inorder(root);
    cout<<"\n";
}
