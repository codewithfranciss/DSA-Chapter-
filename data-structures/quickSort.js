/*
 * Quick sort is a widely used sorting algorithm that efficiently sorts an array  * of elements by dividing it into smaller subarrays based on a chosen pivot element
  */

//let myArray = [3, 7, 2, 5, 1, 4, 6, 8];

function QuickSort(arr){
	if(arr.length <= 1){
		return arr 
	}
//lets pick a pivote element- prefer picking the last element 
	let pivote = arr[arr.length - 1]

	let leftArr = []
	let rightArr = []

	for(let i = 0; i < arr.length - 1; i++){

	if (arr[i] < pivote ) {
	leftArr.push(arr[i])
	}
	
	if (arr[i] > pivote){
	rightArr.push(arr[i])
	}
	
	}

	return [...QuickSort(leftArr), pivote,...QuickSort(rightArr)]
}

console.log(QuickSort([3, 7, 2, 5, 1, 4, 6, 8]))
