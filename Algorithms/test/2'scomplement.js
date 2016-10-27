//timeout

// function processData(input) {
//     //Enter your code here
//      input=input.split("\n")
//     for(i=1;i<=parseInt(input[0]);i++)
//     {
//         input[i]=input[i].split(" ");
//         var a=parseInt(input[i][0]);
//         var b=parseInt(input[i][1]);
//         var sum=0;
//         for(j=a;j<=b;j++)
//         {
//             var binary=(j>>>0).toString(2);
//             //console.log(a,b,binary);
//             for(k=0;k<binary.length;k++)
//             {
//                 if(binary.charAt(k)=='1')
//                     sum++;
//             }
//         }
//         console.log(sum);
//     }
// }


var T=3;
var a1=[-2,0];

// var a2=[-3,4];
// var a3=[-1,4];

var sum=0;
var a=a1[0], b=a1[1];

for(var j=a;j<=b;j++)
{
    var binary=(j>>>0).toString(2);
    console.log(a,b,binary);
    // for(k=0;k<binary.length;k++)
    // {
    //     if(binary.charAt(k)=='1')
    //         sum++;
    // }
}
console.log(sum);