function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    var ans=0;
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if((a[i]+a[j])%k==0)
                ans++;
        }
    }
    console.log(ans);

}
