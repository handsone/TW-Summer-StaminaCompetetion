"use strict";
module.exports = function (arr){
	 arr.sort((a , b) => a - b ) ;
	let length = arr.length ;
	if (  length % 2  === 0 ){
		return ( arr[length / 2 - 1 ] + arr[length / 2] ) / 2 ;
	}
	else {
		return arr[ (length - 1) / 2];
	}
};
