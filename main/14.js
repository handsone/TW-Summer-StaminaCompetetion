function B(arr1, arr2) {
	let answer = [] ;
	for (let A of arr1){
		if (arr2.includes(A)){
			answer.push(A);
		}
	}	
	console.log(answer);
}
B([1,2,2,1], [2,2]);

