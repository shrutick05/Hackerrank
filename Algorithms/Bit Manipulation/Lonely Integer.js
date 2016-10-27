function removePairs(a,n) {
    if(n==1)
        return a[n-1];
    else {
        if(a[0]==a[1]) {

            return removePairs(a.splice(2),a.length);
        }
        else
            //return removePairs(arr.slice(0),arr.length);
            return a[0];
    }
}


function processData(input) {
    //Enter your code here
    var input = input.split('\n');
    var n=parseInt(input[0]);
    var arr = input[1].split(' ').map(Number).sort();
    //console.log(arr);
    //console.log(arr.splice(2));
    console.log(removePairs(arr,n));
} 
