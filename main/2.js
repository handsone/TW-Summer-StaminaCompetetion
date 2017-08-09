"use strict";
module.exports = function (N){
	let num1 = 0 ; 
	let num2 = 1 ;
	for ( let i = 0 ; i < N - 3 ; i ++ ){
		if ( i % 2 === 0  ){
			num1 += num2;
		}
		else {
			num2 += num1;
		}
	}
	if ( N === 1 ){
		return num1 ;
	}
	return num1 + num2 ;
};
