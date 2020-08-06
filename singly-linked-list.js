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

	shift(){
		if(!this.head) return undefined
		var current = this.head 
		this.head = current.next 
		this.length -- 
		if(length === 0){
            this.head = null;
            this.tail = null;
        }
		return current
	}

	unshift(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode 
			this.tail = this.head  
		} else {
			newNode.next = this.head;  
			this.head = newNode;
		}
		this.length++
		return this
	}

	get(index){
		if(index < 0 || index >= this.length) return null 

		let counter = 0; 
		var current = this.head;
		while(counter !== index){
			current = current.next 
			counter++
		}
		return current
	}

	set(val, index){
		let node = this.get(index);
		if(node){
			node.val = val; 
			return true;
		}
		return false;
	}

	insert(val, index){
		if(index < 0 || index > this.length) return false 
		if(index === this.length){
			//boolean !! operator negates return value, returns true/false
			return !!this.push(val)
		}
		if(index === 0){
			return !!this.unshift(val)
		} else {
			let newNode = new Node(val)
			let previous = this.get(index -1)
			//hold previous indexed node in a temp variable so as not to sever the connection
			let temp = previous.next 
			previous.next = newNode 
			newNode.next = temp; 
			this.length++ 
			return true
		}
	}
	
	remove(index){
		if(index < 0 || index >= this.length) return false 
		if(index === this.length - 1) return !!this.pop()
		if(index === 0) return !!this.shift()

		let previous = this.get(index - 1)
		let removed = previous.next 
		previous.next = removed.next
		this.length--
		return removed
	}

	print(){
		var arr = []
		var current = this.head 
		while(current){
			arr.push(current.val)
			current = current.next 
		}
		console.log(arr)
	}

	reverse(){
		if(!this.head) return undefined
		var node = this.head 
		this.head = this.tail 
		this.tail = node;
		//need to make sure tail.next === null; so set prev to null
		prev = null; 
		var next; 

		for( var i = 0; i < this.length; i++){
			next = node.next 
			node.next = prev; 
			prev = node 
			node = next;

		}
		return this

	}
	
}