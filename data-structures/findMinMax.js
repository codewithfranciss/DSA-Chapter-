//function to find the highest value and the lowest value in an array 

function findMinMax(arr){
	if (arr.length === 0){
		throw new Error("Empty array")
	}
	let min = arr[0];
	let max = arr[0];
	
	for(let i = 1; i < arr.length; i++){
        
		//for checking for mininmum value 
		if(arr[i] < min){
                   min = arr[i]

	}
		//for checking for maximum value 
		if(arr[i] > max){
	           max = arr[i]
		}


	}
	return { min , max }

	}

//example usage
let numbers = [3, 7, 1, 9, 4, -2];
let result = findMinMax(numbers);
console.log("Min:", result.min); // -2
console.log("Max:", result.max); // 9
