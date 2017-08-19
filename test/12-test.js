let main = require('../main/12.js');
let chai = require('chai');
let expect = chai.expect ;
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Ditinct array', () => {
	it("input ['s', 'a', 's', 'b', 'a', 1, '1', 1], then should console.log['s', 'a', 'b', 1, '1']", ()=> {
		sinon.spy(console,'log');
		main(['s', 'a', 's', 'b', 'a', 1, '1', 1]);
	     	expect(console.log).to.have.been.calledWith(['s', 'a', 'b', 1, '1']);	
	});
});
