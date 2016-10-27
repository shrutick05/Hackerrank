function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var count=0;
    for(var i=0;i<c.length;i++) {
        for(var j=i+1;j<c.length;j++) {
            if(c[i]===c[j]){
                count+=1;
                //c.splice(i,1);
                //c.splice(j,1);
                c.splice(j,1);
                break;
            }    
        }
    }
    console.log(count);
}
