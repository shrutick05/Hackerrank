function getSum(total, num) {
    return total + num;
}
function processData(input) {
    //Enter your code here
    input = input.split('\n').map(function(a){
        return a.split(' ').map(Number);
    });
    var n=input[0][0];
    var k=input[0][1];
    var c= input[1];
    var bCharged=input[2][0];
    var sum=0;

    c.splice(k,1);
    //console.log()
    var sum = c.reduce(getSum);
    var bActual= Math.ceil(sum/2);

    if(bActual==bCharged)
        console.log("Bon Appetit");
    else
        console.log(bCharged-bActual);

}
