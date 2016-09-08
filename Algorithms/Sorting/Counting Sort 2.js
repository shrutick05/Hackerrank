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

    for(var i=0;i<10;i++) {
        temp[i]=0;
    }
    for(var j=0;j<a.length;j++) {
            temp[a[j]]+=1;
    }
    var b=[];

    for(var i=0;i<10;i++) {
        if(temp[i] !== 0) {
            while(temp[i]--) {
                b.push(i);
                //console.log(i);
            }
        }
    }

    var s=b.toString().replace(/\,/g,' ');
        console.log(s);
}