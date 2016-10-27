function processData (input) {
    //Enter your code here
    let m=5, t=0
    let n = Number (input)
    while (n--) {
        t += Math.floor (m/2)
        m = Math.floor (m/2) * 3
    }
    console.log (t)
}

process.stdin.resume ()
process.stdin.setEncoding ("ascii")
_input = ""
process.stdin.on("data", function (input) {
    _input += input
})

process.stdin.on("end", function () {
   processData(_input)
})
