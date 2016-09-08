// function processData(input) {
//     //Enter your code here
//     var lines = input.split('\n');
//     for(var i = 1; i < lines.length; i++) {
//         if(isFunny(lines[i])) {
//             console.log("Funny");
//         } else {
//             console.log("Not Funny");
//         }
//     }
// }
// function isFunny(s) {
//     for(var j = 0; j < s.length - 1; j++) {
//         if(Math.abs(s.charCodeAt(j + 1) - s.charCodeAt(j)) !==
//             Math.abs(s.charCodeAt(s.length - j - 2) - s.charCodeAt(s.length - j - 1))) {
//             return false;
//         }
//     }
//     return true;
// }


var n=2
var str1="acxz";
var str2="bcxz";

function processData(input) {
    //for(var i=0;i<n;i++) {
        if(isFunny(input)) {
            console.log("Funny");
        }
        else {
            console.log("Not Funny");
        }
    //}
}

function isFunny(str) {
    for(var i=0;i<str.length-1;i++) {
        if(Math.abs(str.charCodeAt(i+1)-str.charCodeAt(i)) !== Math.abs(str.charCodeAt(str.length-i-2)-str.charCodeAt(str.length-i-1)))
            return false;
        return true;
    }
}

processData(str1);
processData(str2);