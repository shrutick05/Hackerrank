function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);

    var energy=100;
    for(var i=0;i<n;i+=k){
        if(c[i]==0)
            energy--;
        else
            energy-=3;
    }
    console.log(energy);

}
