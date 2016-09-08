function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var temp2=arr;
    while(temp2.length!=0) {
        console.log(temp2.length);
        temp2 = reducedArray(temp2);

    }

    function findMin(arr) {
        var temp=arr;
        temp.sort(function(a,b){
            return a-b;
        })
        //console.log(arr);
        return temp[0];
    }

    var minNum = findMin(arr);

    function reducedArray(arr,minNum) {
        var minNum = findMin(arr);
        var temp=[],a=[];
        for(i=0;i<arr.length;i++)
            temp[i] = arr[i] - minNum;

        for(var i=0;i<temp.length;i++) {
            if(temp[i]!=0)
                a.push(temp[i]);
        }

        return a;
    }

}