//var input = "aaabccddd";
var input = "baab";
//var input = "aa";
var arr = input.split(''); 
var b = [];
var i=0, flag=0;


//while(!flag) {
    while(i!=arr.length) {
        if(arr[i] === arr[i+1]) {
            //input.replace(i,'');
            //arr.shift();
            
            i+=2;
        }
        else {
            b.push(arr[i]);
            i++;
            //flag=1;
        }
    }
//}

var str = b.join('');



if(str.length == 0)
    console.log("Empty String");
else
    console.log(str); 