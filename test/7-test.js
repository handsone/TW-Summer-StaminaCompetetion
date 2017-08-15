"use strict";
let main = require('../main/7.js');
var expect = require('chai').expect ;

describe('This is test for 7.js' , () => {

	it('This is test for 7,js', () => {
	let result = main ();
	expect(result).to.be.equal('');
	});

});
