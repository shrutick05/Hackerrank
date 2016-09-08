function processData(input) {
    //Enter your code here
    var temp=input.split("\n");
    var V=parseInt(temp[0]);
    var n=temp[1];
    var arr= temp[2].split(" ");
    var a=[];
    for(var i=0;i<n;i++) {
        a[i]=parseInt(arr[i]);
    }

    for(var i=0;i<n;i++){
        if(a[i] === V) {
            console.log(i);
            break;
        }
    }
}
