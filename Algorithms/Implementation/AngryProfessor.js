function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);

        for(var i=0;i<n;i++) {
            if(a[i]<=0)
                k--;
        }
        if(k<=0) {
            console.log("NO");
        }
        else
            console.log("YES");
        }
}