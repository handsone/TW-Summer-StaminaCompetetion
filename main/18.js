function fizzbuzz (x){
	if( x % 3 === 0  && x % 5 === 0 ){
		console.log('FizzBuzz');
	}
	else	if (x % 3 === 0){
		console.log('Fizz');
	}
	else if ( x % 5 === 0){
		console.log('Buzz');
	}
	else {
		console.log(x);
	}
}
function loop(n){
	for ( let i = 1 ; i <= n ; i ++ ){
		fizzbuzz(i);
	}
}
loop(20);

