function isPangram(s) {
    var letters = "zqxjkvbpygfwmucldrhsnioate"
    // sorted by frequency ascending (http://en.wikipedia.org/wiki/Letter_frequency)
    s = s.toLowerCase();
    //s = s.toLowerCase().replace(/[^a-z]/g,'')
    for (var i = 0; i < 26; i++) {
        if (s.indexOf(letters[i]) < 0){
            //console.log(s.indexOf(letters[i]));
            return false
        }

    }

    return true
}

var status = isPangram("The quick brown fox jumps over the lazy dog");
if(status)
    console.log("pangram");
else
    console.log("not pangram");
