

var energy=100;
    for(var i=0;i<n;i+=k){
        if(c[i]==0)
            energy--;
        else
            energy-=3;
    }
    console.log(energy);