"use strict";
module.exports = function(arr){
	return  arr.filter((x, index, array) => array.indexOf(x) === array.lastIndexOf(x)).shift();
};
