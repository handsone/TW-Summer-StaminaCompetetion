function A(arr){
	let arr1 = arr.reduce((a, b) => a.concat(b) , []);
	let arr2 = arr1.reduce((a, b) => a.concat(b) , []);
	let arr3 = arr2.reduce((a, b) => a.concat(b) , []);
	console.log(arr3);
}
A([1,2,[1,2]]);
A([1,2,[1,2],[3,4]]);
A([4,[3,[2,[1]]]]);


