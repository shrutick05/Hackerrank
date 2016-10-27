function processData(input) {
    //Enter your code here
    var rows = input.split("\n");
    var values = rows[1].split(" ");
    var [n,k,q] = rows[0].split(" ").map(Number);

    var offset = n - k%n;
    var arr = rows.slice(2).map(m => values[ ( parseInt(m) + offset )%n ]).join("\n");
    console.log(arr);
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
