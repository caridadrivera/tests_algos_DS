// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        
        this.data = data
        //if someone sends in a datatype, but does not pass in a new one to link up, it should be null
        this.next = next 
    }
}


class LinkedList {

    constructor() {
        this.head  = null
    }

    insertFirst(data){
        const node = new Node(data, this.head)
        this.head = node;
        //same as :
        // this.head = new Node(data, this.head)
    } 

   



}

module.exports = { Node, LinkedList };
