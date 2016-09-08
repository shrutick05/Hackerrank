var arr= input.split(' ');

var ti = arr[0];
var tj = arr[1];
var n = arr[2];
var tk=0;
var a = [];

a.push(ti);
a.push(tj);

for(i=2;i<n;i++) {
    tk=ti+(tj*tj);
    a.push(tk);
    ti=tj;
    tj=tk;
}

var b=a[a.length-1].split('');
console.log(b.length);
