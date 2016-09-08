
function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    var c1=0,c2=0;
    if((x1>=0 && x1<x2 && x2<=10000)&&(v1>0 && v1<=10000)&&(v2>0 && v2<=10000))
    {
        if(x2>x1 && v2>v1) {
            console.log("NO");

        }
        else {
            while(x1!=x2 && c1<=10000 && c2<=10000) {
               x1=x1+v1;
               x2=x2+v2;
               c1++;
               c2++;
            }
            if(x1==x2) {
                console.log("YES");
            }
            else
                console.log("NO");
        }
    }
}