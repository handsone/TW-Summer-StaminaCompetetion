"use strict";
let main = require('../main/8.js');
var expect = require('chai').expect ;

describe('This is test for 8.js' , () => {

	it ('gave a array [1,3,7,1,4,1,3,7,8,9,10] and a item 1 , then return the item frequency of the item',()  => {
		let result = main([1,3,7,1,4,1,3,7,8,9,10],1) ;
		expect(result).to.be.equal(3);
	});

	it ('gave a array [1,0,1,0,4,5,5,4,8,0,5] and a item 5 , then return the item frequency of the item',()  => {
		let result = main([1,0,1,0,4,5,5,4,8,0,5],5) ;
		expect(result).to.be.equal(3);
	});
});
