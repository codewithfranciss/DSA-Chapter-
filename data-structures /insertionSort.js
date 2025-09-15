// insertion sort works with sorting the elements while comparing the previous parsed array to put the elements in correct place. It is similar to how you sort playing cards in your hand.

//[4, 3, 2, 10, 12, 1, 5, 6]
function insertionSort(arr) {

	for(let i = 1; i < arr.length; i++){
         let current = arr[i]
	 let j = i-1;
	
	//this does the swapping 
	while(j>=0 && arr[j] > current ){
		
	  arr[j+1] = arr[j]

      j--;

	}
	arr[j+1] = current;
	}
return arr;
}

console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]))
