function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);


    var alice=0,bob=0;

    if(a0>b0)
        alice++;
    else {
        if(a0!=b0)
            bob++;
    }
    if(a1>b1)
        alice++;
    else {
        if(a1!=b1)
            bob++;
    }
    if(a2>b2)
        alice++;
    else {
        if(a2!=b2)
            bob++;
    }

    console.log(alice+" "+bob);


}