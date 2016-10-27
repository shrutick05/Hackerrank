
var n=7, d=3;
var a=[1,2,4,5,7,8,10];
var count=0,d1=0,d2=0;

for(var i=0;i<n-2;i++) {
    //count++;
    for(var j=i+1;j<n-1;j++) {
        for(var k=i+2;k<n;k++) {
            if(i<j<k) {
                d1 = a[j] - a[i];
                d2 = a[k] - a[j];
                if(d1===d2 && d2 === d)
                    count++;
            }
        }
    }
}


console.log(count);





// forEach(i in arr) {
//     if(arr.contains(i+d) && arr.contains(i+(2*d)))
//         count+=1;
// }