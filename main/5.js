"use strict";
module.exports = function (){
	let answer = [] ;
	for (let i = 100 ; i <= 999 ; i ++){
		if ( Math.pow(i % 10 , 3) + Math.pow( Math.floor(i / 100) , 3 ) + Math.pow( Math.floor(i % 100 / 10) , 3 ) === i ) {
		answer.push(i);
		}
	}
	return  answer.join(',')   ;
};
