process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = readLine();
    var ch = s.split('');
    var count = 1;

    for(var i=0;i<ch.length;i++) {
        if(s.charCodeAt(i) >= 65 && ch[i].charCodeAt() <= 90) {
            ch[i].charCodeAt()
            count+=1;
        }
    }
    console.log(count);
}