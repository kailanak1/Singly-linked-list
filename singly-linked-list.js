class Node {
	constructor(val){
		this.val = val; 
		this.next = null; 
		}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head; 
		} else {
			this.tail.next = newNode; 
			this.tail = newNode;
			
		}
	    this.length +=1
	    return this;
    }
    
    pop(){
        if(!this.head) return undefined
        var current = this.head;
        var newTail = this.head 
        while(current){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1; 
        if(length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
	}
	
	indexAt(index){
		if(!this.head) return undefined
		let node = this.head; 
		for(i = 0; i < index; i++){
			node = next(node)
		}
		return node
	}
	
	
}