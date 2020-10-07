const sumDigit = (l1,  l2) => {
    let num1 = '';
    let num2 = '';
    let res;
    while (l1 && l2) {
        num1 += l1.val;
        num2 += l2.val;
        l2 = l2.next;
        l1 = l1.next;
    }
  	res = Number(num1.split("").reverse().join("")) + Number(num2.split('').reverse().join(''));
    return res;
}
