"use strict";
const main = require('../main/3.js');
var  expect = require('chai').expect ;

describe('find the number that only appears ones' , function(){
	it ('give a arr [2,3,4,5,6,5,4,3,2,] , it should return 6' , function(){
		let result = main([2,3,4,5,6,5,4,3,2]);
		expect(result).to.be.equal(6);
	});
});
