class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newval = new Node(val)
        if (this.length===0){
            this.head= newval;
            this.tail=newval;
            this.length++
        } else{
            this.tail.next = newval;
            newval.prev = this.tail;
            this.tail = newval;
            this.length ++
        }
    }  

    
    traverse(){
        var current = this.head;
        while( current != null){
            console.log(current.val);
            current= current.next;
        }
    }
    pop(){
        var popped = undefined;
        if (this.length===0) return undefined;
        
        if (this.length===1){
        popped = this.head;
        this.head = null;
        this.tail = null;
        this.length--;    
        } else {
            popped = this.tail;
            var newtail = this.tail.prev;
            popped.prev = null;
            newtail.next = null;
            this.tail= newtail;
            this.length--;
        }
        return popped;
    }
    shift(){
        if (this.length===0) return undefined;
        if (this.length===1){
        var shifted = this.head;
        this.head = null;
        this.tail = null;
        this.length--;    
        } else {
            var shifted = this.head;
            var newhead = this.head.next;
            this.head.next= null;
            newhead.prev = null;
            this.head = newhead;
            this.length--;
        }
        return shifted;
    }
    unshift(val){
        var newval = new Node(val)
        if (this.length===0){
            this.head= newval;
            this.tail=newval;
            this.length++
        } else{
            newval.next = this.head;
            this.head.prev = newval;
            this.head = newval;
            this.length ++
        }
    }
    get(index){
        if (index>this.length-1 || index <0){
            return -1;
            } else {
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
            return false;
            } else {
            var current= this.head;
            var get= 0;
            while(get!= index){
                get ++;
                current= current.next;
            }
            current.val = val;
            return true;
        }
    }

    insert(index,val){
        if (index<0 || index>this.length) return undefined;
        if (index===0){
            this.unshift(val);
            return;
        }
        if(index===this.length){
            this.push(val);
            return;
        } else{
            var newval = new Node(val);
            var current = this.head;
            var get =0;
            while(get !=index-1){
                get ++;
                current=current.next;
            }
            var newnext = current.next;
            current.next = newval;
            newval.prev = current;
            newval.next = newnext;
            newnext.prev = newval;
            this.length++;
        }
        
    }
    remove(index){
        if (index<0 || index>this.length-1) return undefined;
        if (index===0){
            return this.shift();
        }
        if(index===this.length-1){
            return this.pop();
        } else{
            var current = this.head;
            var get =0;
            while(get !=index){
                current=current.next;
                get ++;
            }
            var newnext = current.next;
            current.next = null;
            var newprev = current.prev;
            current.prev = null;
            newprev.next = newnext;
            newnext.prev = newprev;
            this.length--;
            return current;
        }
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
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }
}


var list = new DoublyLinkList();
list.push(100);
list.push(10);
list.push(38);
list.push(23);
list.reverse();
list.traverse();
