let main = require('../main/11.js');
let expect  = require('chai').expect ;

describe('Geiv a array and a item , then return the item`s indexs in the array ', () => {
	it('input [1,3,7,1,4] and 1 , then return  "the index are 0,3"', () => {
		let result = main([1,3,7,1,4],1) ;
		expect(result).to.be.equal('0,3');
	});
});
