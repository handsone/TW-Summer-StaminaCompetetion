"use strict";
let main = require('../main/5.js');
var expect = require('chai').expect ;

describe('Narcissistic number' , function (){
	it('it should return a string "153,370,371,407"'  , function (){
		let result = main ();
		let returns = [153,370,371,407] ;
		expect(result).to.equal(returns.join(','));
	});
});
