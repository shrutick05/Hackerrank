var n=6;
var a=[1,4,3,5,6,2];

var temp=0;


var temp=input.split("\n");
var size=temp[0];
var arr= temp[1].split(" ");
var a=[];
for(var i=0;i<size;i++) {
    a[i]=parseInt(arr[i]);
}

for(var i=1;i<n-1;i++) {
    //console.log(a);
    var s=a.toString().replace(/\,/g,' ');
    console.log(s);
    if(a[i]>a[i+1]) {
        temp=a[i+1];
        a[i+1]=a[i];
        a[i]=temp;
    }
}
var num=a[n-1];
for(var j=n-2;j>=0;j--) {
    while(a[j]>a[j+1]) {
        temp=a[j+1];
        a[j+1]=a[j];
        a[j]=temp;
    }
    //console.log(a);
}

// console.log(a);
var s=a.toString().replace(/\,/g,' ');
console.log(s);





// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6