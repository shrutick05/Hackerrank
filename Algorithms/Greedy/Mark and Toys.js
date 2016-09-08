function processData(input) {
    //Enter your code here
    var pat = new RegExp("\\n"); //first break the input into number of rows, cash and array elements;
    var rows = input.split(pat);

    pat = new RegExp("\\s");

    var cash = rows[0].split(pat).map(Number)[1];// rows[0] = 7 50. 50 is cash.
    var array = rows[1].split(pat).map(Number);//rows[1] = 1 12 5 111 200 1000 10

    array.sort(function (a , b) { // sort in increasing order.
       return a - b;
    });

    var totalToys = 0;

    while(cash >= 0) {
        cash -= array[totalToys];
        totalToys++;
    }
    console.log(totalToys-1);// since during the last execution of while loop the totalToys was incremented by one, even
//though cash got below 0.
}