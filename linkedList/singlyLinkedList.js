// val,next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//tail,head,length
class SinglyLinkedList {
    constructor() {
        this.head = null;//Node
        this.tail = null;//Node
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val); 
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length +=1;
    }

    pop(){
        if (this.head === null){
            return undefined;

        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length --;
        } 
        else {
            var current = this.head;
            while (current.next != this.tail){
                current= current.next;
            }
            this.length --;
            var poped = this.tail;
            this.tail = current;
            return poped.val;
        }
    }

    popRec(head) {
        if (head.next ===null) {
            return null;
        } else {
            head.next = this.popRec(head.next);
        }

        return head;
    }

    traverse() {
        var current= this.head;
        while(current != null){
            console.log(current.val);
            current= current.next;
        }
    }

    // shift remove 1 node from begin and return
    shift(){
        var current = this.head;
        this.head= current.next;
        current.next= null;
        this.length--;
        return current.val;
    }

    // unshift add a node at beginneing of link list
    unshift(val) {
        var temp = this.head;
        var newvalue = new Node(val);
        this.head= newvalue;
        this.head.next= temp;
        this.length++;
    }

    get(index) {
        if (index>this.length-1 || index <0){
            return -1;
        } else{
            var current= this.head;
            var get= 0;
            while(get!= index){
                get ++;
                current= current.next;
            }
            return current.val;
        }
    }

    set(index,val){
        if (index>this.length-1 || index <0){
            return undefined;
        } else{
            var current= this.head;
            var get= 0;
            while(get!= index){
                get ++;
                current= current.next;
            }
        current.val = val;
        }
    }

    insert(index,val){
        if (index<0 || index>this.length) return undefined;
        if (index===0)  {
            this.unshift(val);
            return;
        }
        if (index===this.length) {
            this.push(val);
            return;
        } 
        var current = this.head;
        var get= 0;
        while(get!= index -1){
            get ++;
            current= current.next;
        }
        var newvalue = new Node(val);
        newvalue.next = current.next;
        current.next = newvalue;
        this.length++;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    pop(){
        if (this.length===0) return undefined;
        if (this.length===1){
            
        }
    }

}


// driver functions
var list = new SinglyLinkedList();
list.push(10);
list.push(2);
list.push(33);
list.push(45);
list.reverse();
list.reverse();
list.travaerRec(list.head);
