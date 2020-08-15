class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length= 0;
    }
    push(val){
        var newval = new Node(val);
        if (this.length===0){
            this.head= newval;
            this.tail = newval;
            this.length ++;
        } else{
            newval.next = this.head;
            this.head = newval;
            this.length ++;
        }
    }
    pop(){
        if (this.length===0) {
            return -1;
        }
        if (this.length===1){
            var current = this.head;
            this.head= null;
            this.tail=null;
            this.length--;
        }else{
            var current = this.head;
            this.head = current.next;
            current.next= null;
            this.length--;
        }
        return current.val;
    
    }
}
var newstack = new Stack();

newstack.push(10);
newstack.push(11);
newstack.push(12);
console.log(newstack.pop());