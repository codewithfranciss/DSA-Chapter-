function Factorial(n) {
	if(n<= 0){
		throw new Error("number must be above 0")
	}

	if(n == 1){
		return 1

	}

	return n *  Factorial(n - 1)
}

console.log(Factorial(5))
