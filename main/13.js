function FindMostCharacters(string) {
	let arr = string.split('');
	let map = {};
	for ( let i = 0 ; i < arr.length ; i ++ ){
		map[arr[i]]? map[arr[i]] += 1 : map[arr[i]] = 1 ;
	}
	let max = 0 ;
	let answer = {} ;
	for ( let item in  map ){
		if (map[item] > max){
			max = map[item];
		}
	}
	for (let item in map ){
		if (map[item] === max){
			answer[item] = map[item] ;
		}
	}
	console.log(answer);
}
FindMostCharacters('abcsbaddbizdbas');
FindMostCharacters('aaaaabbdbdbb');

