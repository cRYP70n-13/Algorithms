#include <iostream>

using namespace std;

void    insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        j = i - 1;
        key = arr[i];

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
    }
}

void    printArr(int arr[], int n)
{
    for (int i = 0; i < n; i++)
        cout << arr[i] << endl;
    cout << "\n" << endl;
}

int     main(void)
{
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);
    printArr(arr, n);
    return 0;
}
