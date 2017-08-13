"use strict";
let main = require('../main/6.js');
var expect = require('chai').expect ;

describe('Give a arr of number , then return the median' , function (){
	it ('give a arr :[9,5,3,6,1,2,4,7,8] , then return number 5 ' , function(){
		let result = main([9,5,3,6,1,2,4,7,8]);
		expect(result).to.be.equal(5);
	});
	it ('give a arr :[9,5,3,0,6,1,2,4,7,8] , then return number 4.5 ' , function(){
		let result = main([9,5,3,0,6,1,2,4,7,8]);
		expect(result).to.be.equal(4.5);
	});
});
