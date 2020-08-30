class twoStack {
    constructor() {
        this.size = n;
        this.top1 = -1;
        this.top2 = n;
        this.arr = [];
    }

    // Push in the first Stack
    push1 = elm => {
        if (this.top1 < this.top2 - 1)
            this.arr[++this.top1] = elm;
        else
            return 'Stack Overflow';
    }

    push2 = elm => {
        if (this.top1 < this.top2 - 1)
            this.arr[--this.top2] = elm;
        else
            return 'Stack Overflow';
    }

    pop1 = () => {
        if (this.top1 >= 0) {
            let elm = this.arr[this.top1];
            this.top1--;
            return elm;
        } else {
            return 'Stack Underflow';
        }
    }

    pop2 = () => {
        if (this.top2 < this.size){
            let elm = this.arr[this.top2];
            this.top2++;
            return elm;
        } else {
          return 'stack underflow';
        }
    }
}
