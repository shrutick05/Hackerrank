function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var sum=0;
    for(var i=0;i<n;i++)
        sum+=arr[i];
    console.log(sum);

}