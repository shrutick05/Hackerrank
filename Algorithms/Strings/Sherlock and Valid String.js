function getMaxOfArray (numArray) {
  return Math.max.apply(null, numArray)
}

function getMinOfArray (numArray) {
  return Math.min.apply(null, numArray)
}

function processData(input) {
    //Enter your code here
    var arr=[],count=0;
    for(var i=0;i<26;i++){
        arr[i]=0;
    }
    for(var i=0;i<input.length-1;i++){
        var temp=input.charCodeAt(i);
        arr[temp-97]+=1;
    }

    arr.sort();
    //console.log(arr.lastIndexOf(0));
    arr.splice(0,arr.lastIndexOf(0)+1);
    //console.log(arr);

    var maxLength = getMaxOfArray(arr)
    var minLength = getMinOfArray(arr)

    if (maxLength == minLength)
    console.log('YES')
    else if ((maxLength - minLength === 1) && ((arr.indexOf(minLength) === arr.lastIndexOf(minLength)) ||(arr.indexOf(maxLength) === arr.lastIndexOf(maxLength))))
        console.log('YES')
    else if ((minLength === 1) && (arr.indexOf(minLength) === arr.lastIndexOf(minLength)))
        console.log('YES')
    else
        console.log('NO')
}
