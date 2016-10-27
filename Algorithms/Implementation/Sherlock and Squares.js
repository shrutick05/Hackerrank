function countSquares(lower, upper) {
  var lowerSquare = Math.ceil(Math.sqrt(lower));
  var upperSquare = Math.floor(Math.sqrt(upper));
  if(lowerSquare > upperSquare)
    return 0;
  else
    return upperSquare - lowerSquare + 1;
}
function processData(input) {
    //Enter your code here
    var input=input.split('\n').map(function(a){
        return a.split(' ').map(Number);
    })
    var i=0;
    var T=input.splice(0,1)[0][0];
    while(T--){
       var min=input[i][0],max=input[i][1]
       //console.log(min,max)
       console.log(countSquares(min,max));
       i++;
    }
} 
