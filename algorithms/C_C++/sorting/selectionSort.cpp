#include <iostream>

using namespace std;

void    swap(int *x, int *y)
{
    int tmp = *x;
    *x = *y;
    *y = tmp;
}

void    selectionSort(int arr[], int n)
{
    int i = 0;
    int min_indx = 0;
    int j = 0;
    for (i = 0; i < n - 1; i++) {
        min_indx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_indx])
                min_indx = j;
            swap(&arr[min_indx], &arr[i]);
    }
}

void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
}
