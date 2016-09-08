function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);

    var diff=0,min=0, temp=[];

    for(var i=0;i<n;i++) {
        for(var j=i+1;j<n;j++) {
            if(i != j && A[i] === A[j]) {
                if(i>j) {
                    diff = i-j;
                    //console.log("i>j:"+" "+diff);
                    temp.push(diff);
                }
                else {
                    diff = j-i;
                    //console.log("j>i:"+" "+diff);
                    temp.push(diff);
                }
            }
        }
    }

    if(temp.length != 0){
        var min = Math.min(...temp);
        console.log(min);
    }
    else
        console.log(-1);
}



