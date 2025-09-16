 function selectionSort(arr) {

	 for(let i = 0; i < arr.length; i++){
		let minIndex = i;
		 //looking for the lowest number in the array 
              for(let j = i+1; j<arr.length; j++){
		      if(arr[j] < arr[minIndex])
		      {
		      minIndex = j;
		      }
		     }
		//first element is not the lowest element 
		 if(arr[i] !== minIndex){

	        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
           }
	 }
	 return arr;

 }

console.log(selectionSort([27, 3, 7, 1, 0]));


