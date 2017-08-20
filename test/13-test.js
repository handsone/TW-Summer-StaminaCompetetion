let main = require('../main/13.js');
let chai  = require('chai');
let expect = chai.expect   ;
let sinon =  require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);


describe('Find the most characters in the string', () => {
	it('input "abcsbaddbizdbas", output {b:4}', () => {
		sinon.spy(console, 'log');
		 main('abcsbaddbizdbas');
		expect(console.log).to.be.been.calledWith({b:4});
	});
	/*it('input "aaaaabbdbdbb", output {a:5,b:5}', () => {
		//sinon.spy(console, 'log');
		main('aaaaabbdbdbb');
		expect(console.log).to.be.been.calledWith({a:5,b:5});
	});*/
});
