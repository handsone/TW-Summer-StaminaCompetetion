"use strict";
let main = require('../main/SeekFactor.js');
var expect = require('chai').expect;

describe('给定一个正整数，返回他的因质数', function (){
	it('90的因质数为2 3 3 5 ', function(){
		expect(main(90)).to.be.equal('90=2335');
	});

	it('50的因质数为2 5 5 ', function(){
		expect(main(50)).to.be.equal('50=255');
	});
});
