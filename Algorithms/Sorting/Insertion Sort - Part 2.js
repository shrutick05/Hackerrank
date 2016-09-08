function processData(input) {
    //Enter your code here
    var temp=input.split("\n");
    var n=temp[0];
    var arr= temp[1].split(" ");
    var a=[];
    for(var i=0;i<n;i++) {
        a[i]=parseInt(arr[i]);
    }

    var temp=0;

    for(var i=0;i<n-1;i++) {
        for(var j=i;j>=0;j--) {
            if(a[j]>a[j+1]) {
                temp=a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
        //console.log(a);
        var s=a.toString().replace(/\,/g,' ');
        console.log(s);
    }
}