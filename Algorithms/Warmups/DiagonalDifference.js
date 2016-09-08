function main() {
    var n = parseInt(readLine());
    var a = [];
    var sum_first=0, sum_sec=0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    for(var i=0;i<n;i++) {
        for(var j=0;j<n;j++) {
            if(i==j)
                sum_first += a[i][j];
            if(j==(n-i-1))
                sum_sec+=a[i][j];
        }
    }
    if(sum_sec>sum_first)
        console.log(sum_sec-sum_first);
    else
        console.log(sum_first-sum_sec);


}