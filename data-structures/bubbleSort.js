/* Bubble Sort is just repeatedly swapping neighbors until the list is sorted.

   Each pass pushes the largest unsorted number to the end.
   Keep going until no swaps are needed. */

//[4, 3, 2, 10, 12, 1, 5, 6];

function bubbleSort(arr){
	let swapped = true;

	while (swapped) {

	swapped = false;
	
        for(let i = 0; i < arr.length - 1; i++){
		if(arr[i] > arr[i+1]) {
		 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
			 swapped = true;
		}
	}
	}
	return arr;
}

console.log(bubbleSort([4, 3, 2, 10, 12, 1, 5, 6]))
