"use strict";
module.exports = (arr) => {
	let answer = [] ;
	let array = arr.filter((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
	for ( let A of array ){
		if (answer.indexOf(A) === -1){
			answer.push(A);
		}
	}
	return answer.join(',') ;
};
