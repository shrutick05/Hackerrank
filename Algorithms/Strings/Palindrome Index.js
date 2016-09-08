// function reverse(str) {
//     var a=str.split('');
//     a.reverse();
//     return a.join('');
// }

// String.prototype.replaceAt = function(index, charcount) {
//   return this.substr(0, index) + this.substr(index + charcount);
// }

// function processData(input) {
//     //Enter your code here
//     var lines = input.split("\n");
//     var T = parseInt(lines[0]);
//     lines = lines.slice(1);
//     var j=0;

//     while(T--) {
//         for(var i=0;i<lines[j].length;i++) {
//             if(lines[j]!==reverse(lines[j])) {
//                 var temp=lines[j].replaceAt(i,1);
//                 var temp2=reverse(temp);
//                 if(temp===temp2) {
//                     console.log(i);
//                     break;
//                 }
//             }
//             else {
//                 console.log(-1);
//                 break;
//             }
//         }
//         j++;
//     }
// }



function reverse(str) {
    var a=[];
    for(var i=str.length-1;i>=0;i--)
        a.push(str[i]);
    return a.join('');
}

String.prototype.replaceAt = function(index, charcount) {
  return this.substr(0, index) + this.substr(index + charcount);
}



var str="aaab";
//var str="aaa";
//var str="baa";
var len=str.length;

//var arr = line.split('');

for(var i=0;i<len;i++) {
    if(str!==reverse(str)) {
    var temp=str.replaceAt(i,1);
    //console.log(temp);
    var temp = str.slice(i); 
    var temp2=reverse(temp);
    if(temp===temp2) {
        console.log(i);
        break;
    }
    }
    else {
        console.log(-1);
        break;
    }
    //break;
}



