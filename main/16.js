function leftPad(currentString, count, target){
	if(count < currentString.length ){
		console.log(currentString);
	}
	else {
	console.log((target.repeat(count - currentString.length)) + currentString);
	}
}
leftPad('hello', 20, '1');
leftPad('hello', 4 , '1');
