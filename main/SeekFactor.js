"use strict";
function main( number  ){
	let  arr = String(number) + '=';
	function SeekFactor (num ){
		for (let i = 2 ; i <= num ; i ++){
			if (num % i ===  0){
				arr += String(i);
				num = num / i ;
				i  = 1 ;
			}
		}
	}
	SeekFactor(number);
	return arr ;
}

module.exports = main ;
