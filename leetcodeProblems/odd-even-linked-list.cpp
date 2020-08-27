#include <iostream>

using namespace std;

class Node {
	public:
		int data;
		Node *next;
};

Node	*OddEven(Node *head)
{
	if (head == NULL)
		return NULL;
	Node *even = head->next;
	Node *headEven = even;
	Node *odd = head;
	
	while (even && even->next)
	{
		odd->next = head->next;
		odd = odd->next;
		even->next = odd->next;
		even = even->next;
	}
	odd->next = headEven;
	return head;
}

int main(int argc, char const *argv[])
{
	
	return 0;
}
