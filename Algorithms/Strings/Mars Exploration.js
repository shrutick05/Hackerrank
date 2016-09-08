function main() {
    var S = readLine();
    //console.log(S);
    var ans=0;

    for(var i=0;i<S.length;i+=3){
        var temp = S.slice(i-3);
        //console.log(temp);

        var a=temp.split('');
        //console.log(a);
        if(a[0] != 'S')
            ans++;
        if(a[1] != 'O')
            ans++;
        if(a[2] != 'S')
            ans++;
    }
    console.log(ans);
}