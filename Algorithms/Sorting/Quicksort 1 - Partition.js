function processData(input) {
    //Enter your code here
    var arrInput = input.split('\n').map(function(a){
        return a.split(' ').map(Number);
    });

    //console.log(arrInput[0][0]);
    //console.log(arrInput[1]);
    var n=arrInput[0][0];
    var arr=arrInput[1];
    var left = [];
    var right = [];
    var equal = [];
    var pivot = arrInput[1][0];

    for(var i=0; i<n ; i++) {
        if(pivot==arr[i])
            equal.push(arr[i]);
        else if(pivot>arr[i])
            left.push(arr[i]);
        else
            right.push(arr[i])
    }

    var temp = left.concat(equal);
    temp = temp.concat(right);

    console.log(temp.join(' '));
} 
