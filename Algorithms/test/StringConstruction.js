var str = 'abab';

var arr = str.split('');
var count = 0;
var result = [];


for(var i=0;i<arr.length;i++) {
	//console.log(arr[i]);	
	if(result.length==0) {
		result.push(arr[i]);
		count++;
	}
	else {
	for(var j=0;j<result.length;j++) {
	//	console.log(arr[i]);
		if(arr[i] !== result[j]) {
			//console.log(result[j]);
			result.push(arr[i]);
			count++;
			//break;
		}	
		break;
	}
	}
}

console.log(result);
console.log(count);

