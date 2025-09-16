//created a simple static array class with basic methods 

//static array is an array that has a fixed size 

class UnsortedArray{
    constructor(maxSize){
      //the this keyword is an instance variable that allow each object to have separate properties 
        this.array = new Array(maxSize)
        this.maxSize = maxSize
        this.size = 0
}
//instering an element into the array 
    insert(value){
	if(this.size >= this.maxSize){
        throw new Error("Array is full")
	}
	this.array[this.size] = value;
	   this.size++
}

   delete(value){
//search for the value in the array 
	for(let i = 0; i < this.size; i++){
         if(this.array[i] == value){
	 //shift all the remaining element to the left 
	for(let j = i; j<this.size-1; j++){
		this.array[j] = this.array[j+1]
	}
    this.size--
	return true
	 }
	}
	 return false   
   }
  search(value){
	for(let i = 0; i< this.size; i++){
	if( this.array[i] == value ){
		return i;
	}
	}
	  return -1;
  }
  display(){
	let result = "";
  	for(let i = 0; i<this.size; i++){
	result += this.array[i] + " "
	}
	return result.trim();
  }
}

//example of how to use the static array class
const arr = new UnsortedArray(5)
arr.insert(10)
arr.insert(20)
arr.insert(30)
console.log(arr.display()) // 10 20 30
console.log(arr.search(20)) // 1
arr.delete(20)
console.log(arr.display()) // 10 30
console.log(arr.search(20)) // -1

 
