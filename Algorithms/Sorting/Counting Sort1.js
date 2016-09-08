function processData(input) {
    //Enter your code here
    var temp=input.split("\n");
    var n=temp[0];
    var arr= temp[1].split(" ");
    var a=[];
    for(var i=0;i<n;i++) {
        a[i]=parseInt(arr[i]);
    }
    var temp=[];
    for(var i=0;i<100;i++) {
        temp[i]=0;
    }

    for(var j=0;j<a.length;j++) {
            temp[a[j]]+=1;
    }

    var s=temp.toString().replace(/\,/g,' ');
        console.log(s);
}
