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
  var h = parseInt(readLine())
  var m = parseInt(readLine())

  var hours = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
  }

  var minutes = {
    // '00': "o' clock",
    '01': 'one minute past',
    '02': 'two minutes past',
    '03': 'three minutes past',
    '04': 'four minutes past',
    '05': 'five minutes past',
    '06': 'six minutes past',
    '07': 'seven minutes past',
    '08': 'eight minutes past',
    '09': 'nine minutes past',
    '10': 'ten minutes past',
    '11': 'eleven minutes past',
    '12': 'twelve minutes past',
    '13': 'thirteen minutes past',
    '14': 'fourteen minutes past',
    '15': 'quarter past',
    '16': 'sixteen minutes past',
    '17': 'seventeen minutes past',
    '18': 'eighteen minutes past',
    '19': 'ninteen minutes past',
    '20': 'twenty minutes past',
    '21': 'twenty one minutes past',
    '22': 'twenty two minutes past',
    '23': 'twenty three minutes past',
    '24': 'twenty four minutes past',
    '25': 'twenty five minutes past',
    '26': 'twenty six minutes past',
    '27': 'twenty seven minutes past',
    '28': 'twenty eight minutes past',
    '29': 'twenty nine minutes past',
    '30': 'half past',
    '31': 'thirty one minutes past',
    '32': 'thirty two minutes past',
    '33': 'thirty three minutes past',
    '34': 'thirty four minutes past',
    '35': 'twenty five minutes to',
    '36': 'twenty four minutes to',
    '37': 'twenty three minutes to',
    '38': 'twenty two minutes to',
    '39': 'twenty one minutes to',
    '40': 'twenty minutes to',
    '41': 'ninteen minutes to',
    '42': 'eighteen minutes to',
    '43': 'seventeen minutes to',
    '44': 'sixteen minutes to',
    '45': 'quarter to',
    '46': 'fourteen minutes to',
    '47': 'thirteen minutes to',
    '48': 'twelve minutes to',
    '49': 'eleven minutes to',
    '50': 'ten minutes to',
    '51': 'nine minutes to',
    '52': 'eight minutes to',
    '53': 'seven minutes to',
    '54': 'six minutes to',
    '55': 'five minutes to',
    '56': 'four minutes to',
    '57': 'three minutes to',
    '58': 'two minutes to',
    '59': 'one minutes to'
  }

  if (m >= '31') {
    intHr = (h + 1).toString()
    console.log(minutes[m] + ' ' + hours[intHr])
  }
  else if (m == 0)
    console.log(hours[h] + " o' clock")
  else if (m == '15' || m == '30' || '01' <= m <= '39')
    console.log(minutes[m], hours[h])
}
