class Node{
	constructor(value) {
		this.value = value;
		this.next  = null;
	}
}

class LinkedList {
	constructor(){
	this.head = null;
	this.tail = null;
	this.length = 0;
	}

 //add an element to the end of the list 
	
	append(value){
	
	const newNode = new Node(value)
	
	if(!this.head){
	
	this.head = newNode;
	this.tail = newNode;
	} else {
        this.tail.next = newNode;
	this.tail = newNode;
	}
	this.length++
	}

	prepend(value){
        
	const newNode = new Node(value);

	        if(!this.head){
                
        this.head = newNode;
        this.tail = newNode;
        } else {
	
	newNode.next = this.head;
	this.head = newNode
	}
	
	this.length++
	}

	printList(){
	
	let current = this.head;
	let result = []
	while(current){
	result.push(current.value)
	current = current.next
	}
	console.log(result.join('->'))
	}
		
}

const myList = new LinkedList();

myList.append(10);   // List: 10
myList.append(20);   // List: 10 -> 20
myList.prepend(5);   // List: 5 -> 10 -> 20
myList.append(30);   // List: 5 -> 10 -> 20 -> 30

myList.printList();  // Output: 5 -> 10 -> 20 -> 30
