function processData(input) {
    //Enter your code here
    var temp=input.split("\n");
    var size=temp[0];
    var arr= temp[1].split(" ");
    var a=[];
    for(var i=0;i<size;i++) {
        a[i]=parseInt(arr[i]);
    }
    var num = a[size-1];
    //console.log(num);
    var placed=false;
    for(var j = a.length - 2; j >= 0; j--) {
        if(a[j] > num) {
            a[j + 1] = a[j];
            var s=a.toString().replace(/\,/g,' ');
                console.log(s);
            //console.log(arr);
        } else {
            a[j + 1] = num;
            //console.log(a);
            var s=a.toString().replace(/\,/g,' ');
                console.log(s);
            placed = true;
            break;
        }
    }
    if(!placed) {
        a[0] = num;
        //console.log(a);
        var s=a.toString().replace(/\,/g,' ');
                console.log(s);
    }
}