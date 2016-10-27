process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

process.stdin.on('data', function (data) {
  input_stdin += data
})

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n')
  main()
})

function readLine () {
  return input_stdin_array[input_currentline++]
}

// ///////////// ignore above this line ////////////////////

function main () {
  var time = readLine()
  // console.log(typeof time)
  var temp = time.split(':')
  // console.log(temp)
  var hr = temp[0]
  var min = temp[1]
  // console.log(min)
  var sec = temp[2].slice(0, 2)
  // console.log(sec)
  var aMorPM = temp[2].slice(2)
  // console.log(aMorPM)

  if (aMorPM === 'AM') {
    if (hr === '12' && min === '00' && sec === '00')
      console.log('00:00:00')
    else if (parseInt(hr) == 12)
      console.log('00:' + min + ':' + sec)
    else
      console.log(hr + ':' + min + ':' + sec)
  }else {
    if (1 <= parseInt(hr) < 12 || 0 <= parseInt(min) <= 59 || parseInt(sec) <= 59) {
      hr = parseInt(hr) + 12
      if (parseInt(hr) >= 24)
        hr = parseInt(hr) - 12
    }
    console.log(hr + ':' + min + ':' + sec)
  }
}
