function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var zeroCount=0,positiveCount=0,negativeCount=0;
    for(var i=0;i<n;i++) {
        if(arr[i]==0)
            zeroCount+=1;
        else if(arr[i]<0)
            negativeCount+=1;
        else
            positiveCount+=1;
    }
    console.log(parseFloat(positiveCount/n));
    console.log(parseFloat(negativeCount/n));
    console.log(parseFloat(zeroCount/n));
}