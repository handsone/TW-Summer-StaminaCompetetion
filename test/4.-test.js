"use strict";
let main = require('../main/4.js');
var expect = require('chai').expect ;

describe('This is test for 4.js' , function (){
	it ('get a string of "1=>2=>3=>3=>4=>5=>3", then return 1=>2=>4=>5', function (){
		let result = main( "1=>2=>3=>3=>4=>5=>3" , '3');
		expect(result).to.be.equal('1=>2=>4=>5');
	});
});
