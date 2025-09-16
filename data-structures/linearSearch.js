 function LinearSearch(arr, target) {

	 for(let i = 0; i < arr.length; i++){
		 if(arr[i] == target) {
			 return i;
		 }
	 }

	 return -1;
 }

console.log(LinearSearch([2, 4, 67, 8, 44, 6, 12], 44));
