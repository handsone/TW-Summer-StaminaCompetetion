function back (arr, item){
	arr.forEach((x, index) => {
		if (x === item){
			arr.splice(index, 1);
			arr.push(x);
		}
	});
	console.log(arr);
}
back([0, 1, 0, 3, 12], 0);
