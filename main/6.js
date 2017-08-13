"use strict";
module.exports = function (arr){
	 arr.sort((a , b) => a - b ) ;
	return arr.length % 2 === 0 ? (arr[arr.length / 2 - 1] + arr[arr.length / 2])/2 : arr[(arr.length - 1) / 2] ;
};
