function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var height = 1;
        if(n === 0){
            console.log(height);
        }
        else if(n === 1) {
            console.log(height + 1);
        }
        else {
            var springSeason = true;
            while(n >= 1) {
                if(springSeason) {
                    height *= 2;
                    n--;
                    springSeason = false;
                }
                else {
                    height += 1;
                    n--;
                    springSeason = true;
                }
            }
            console.log(height);
        }
    }
}
