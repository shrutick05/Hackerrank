function processData(input) {
    //Enter your code here

    var arrInput = input.split('\n').map(function(a) {
       return a.split(' ').map(Number);
    });

    //console.log(arrInput);
    var n = arrInput[0][0];
    //console.log(n);
    var arrNumbers = [];
    for(var i=1;i<=n;i++) {
        arrNumbers.push(arrInput[i][0]);
    }
    //console.log(arrNumbers);

    var temp=[];
    for(var j=0;j<100;j++) {
        temp.push(0);
    }
    //console.log(temp);

    for(var j=0;j<arrNumbers.length;j++) {
            temp[arrNumbers[j]]+=1;
    }
    //console.log(temp);
    for(var k=0;k<100;k++) {
        if(k==0)
            temp[0]=temp[k];
        else
            temp[k] += temp[k-1];
    }
    //console.log(temp);

    var s=temp.toString().replace(/\,/g,' ');
    console.log(s);

} 
