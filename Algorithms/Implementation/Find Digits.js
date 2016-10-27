function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = readLine();
        var totalValue = 0;
        n.split('').forEach((value) => {
            if ((n%(parseInt(value)) == 0)) totalValue++;
        });
        console.log(totalValue);
    }

}
