module.exports = (arr, item) => {
	let indexs = [];
	arr.forEach((x, index) => {
		if (x === item){
			indexs.push(index);
		}
	});
	return indexs.join(',') ;
};
