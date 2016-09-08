// var str = "AAABBB";
// var arr = str.split('');
// var deleted = 0;

// console.log(arr);

// for(var i=0;i<arr.length;i++) {
// 	if(arr[i] === arr[i+1])
// 		deleted += 1;
// } 

// console.log(deleted);


function runTest(line) {
    var arr = line.split('');
    var deleted = 0;
    for(var i=0;i<arr.length;i++) {
	if(arr[i] === arr[i+1])
		deleted += 1;
    }
    console.log(deleted);
}

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var tests = Number(lines.shift());

    for (var i = 0; i < tests; i++) {
    	runTest(lines.shift());
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});