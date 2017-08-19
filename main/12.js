module.exports = (arr) => {
	let answer = [];
	for (let item of arr){
		if (answer.indexOf(item) === -1){
			answer.push(item);
		}
	}
	console.log(answer);
};
