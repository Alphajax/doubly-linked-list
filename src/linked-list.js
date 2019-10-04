const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        if (this.length>0){
            let node = new Node(data, this._tail, null);
            this._tail.next = node;
            this._tail = node;
        }else{
            let node = new Node(data);
            this._head = node;
            this._tail = node;
        }
        this.length++;

    }

    head() {
        let node = this._head;
        if (node ===null){
            return null;
        }
        return node.data;
    }

    tail() {
        let node = this._tail;
        if (node ===null){
            return null;
        }
        return node.data;
    }

    at(index) {
        let node = this._head;
        for(let i =0;i<index;i++){
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        let temp = this._head;
        let node = new Node(data);
        for(let i =0;i<index;i++){
            temp = temp.next;
        }
        node.next = temp;
        node.prev = temp.prev;
        node.prev.next = node;
        node.next.prev = node;

    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        let temp = this._head.next;
        while(temp.next!==null){
            temp.prev.next=null;
        }
        this._head=null;
        this._tail = null;
        this.length=0;
    }

    deleteAt(index) {
        let temp = this._head;
        for(let i =0; i<index;i++){
            temp = temp.next;
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while( current ){
            let next = current.next
            current.next = prev
            current.prev = next
            prev = current
            current = next
        }
        this._tail = this._head
        this._head = prev
    }

    indexOf(data) {
        let ind =-1;
        let temp = this._head;
        for(let i=0; i<this.length;i++){
            if (temp.data === data){
                ind = i;
                break;
            }
            temp=temp.next;
        }
        return ind;
    }
}

module.exports = LinkedList;
