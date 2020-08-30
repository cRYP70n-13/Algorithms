const reverseStringStack = s => {
    let rev = [];
    let str = s.split('').reverse();
    for (let i = 0; i < str.length; i++) {
        rev.push(str[i]);
    }
    return rev.join('');
}

console.log(reverseStringStack('otmane kimdil'));
