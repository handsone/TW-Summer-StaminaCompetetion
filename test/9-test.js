"use strict";
let main = require('../main/9.js');
var expect = require('chai').expect ;

describe('Give a array , then return the item that dont repeat ' , () => {
	it ("Give a array ['a', 'gab', 'ed', 'da', 'a', 'ed', 'b'] , then return 'a,ed',]" ,() => {
		let result = main(['a', 'gab', 'ed', 'da', 'a', 'ed', 'b']);
		let answer = ['a','ed'];
		expect(result).to.be.equal(answer.join(','));
	});
});
