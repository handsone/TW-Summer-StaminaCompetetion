let main = require('../main/10.js');
let expect = require('chai').expect ;

describe('Give a array ,then return the array that every item square' , () => {
	it('Input [5,3,7,1] , retrun [25,9,49,1]' , () => {
		let result = main([5,3,7,1]);
		expect(result).to.be.equal('25,9,49,1');
	});
});
