"use strict";

let main = require('../main/2.js');
var expect = require('chai').expect;

describe('斐波纳契数列', function(){

	it('第五个数是  3 ' , function (){
		let result = main (5);
		expect(result ).to.be.equal(3);

	});
	it('第八个数是  13 ' , function (){
		let result = main (8);
		expect(result ).to.be.equal(13);

	});
	it('第一个数是  0 ' , function (){
		let result = main (1);
		expect(result ).to.be.equal(0);

	});
	it('第二个数是  1 ' , function (){
		let result = main (2);
		expect(result ).to.be.equal(1);

	});
});
