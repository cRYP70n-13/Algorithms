const reverseStackRecursion = stack => {
    if (!stack.isEmpty()) {
        let tmp = stack.pop();
        reverseStackRecursion(stack);
        insertAtTheBottom(tmp, stack);
    }
}

// Start inserting all the elements from the bottom of our stack
insertAtTheBottom = (tmp, stack) => {
    if (stack.isEmpty()) {
        stack.push(tmp);
    } else {
        let x = stack.pop();
        insertAtTheBottom(tmp, stack);
        stack.push(x);
    }
}

let stack = new Stack();
 stack.push(1);
 stack.push(2);
 stack.push(3);
 stack.push(4);
 stack.push(5);

 reverseStack(stack); //call the function

 //Print the stack
 while(!stack.isEmpty()){
   console.log(stack.pop());
 }
