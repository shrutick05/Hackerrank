var n=4,k=3;
var sub=[];
var a=[1,7,2,4];

for(var i=0;i<n;i++) {
    for(var j=i+1;j<n;j++) {
        if((a[i]+a[j])%k !== 0) {
            sub.push(a[i]);
            sub.push(a[j]);
        }
    }
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// usage example:
var unique = sub.filter( onlyUnique );

//console.log(unique);

Array.prototype.difference = function(e) {
    return this.filter(function(i) {return e.indexOf(i) < 0;});
};

var diff = a.difference(sub);

// console.log(unique);
// console.log(diff);
// var count=0,flag=0;
// for(var i=0;i<a.length;i++) {
//     for(var j=0;j<diff.length;j++) {
//         if((a[i]+diff[j])%k == 0)
//             flag=1;
//         flag=0;
//     }
// }

var count=0,flag=0;
for(var i=0;i<unique.length;i++) {
    for(var j=0;j<diff.length;j++) {
        if((unique[i]+diff[j])%k == 0)
            count++;
    }
}

console.log(count);