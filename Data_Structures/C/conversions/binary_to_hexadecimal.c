/*
 * C Program to Convert Binary to Hexadecimal
 * Created By: cRYP70N
 * Date: 28/09/2020
 */
#include <stdio.h>

int main()
{
	long int binary, hexa = 0, i = 1, remainder;

	printf("Enter the binary number: ");
	scanf("%ld", &binary);
	while (binary != 0)
	{
		remainder = binary % 10;
		hexa = hexa + remainder * i;
		i = i * 2;
		binary = binary / 10;
	}
	printf("THe Equivalent hexadecimal value: %lX", hexa);
	return 0;
}
