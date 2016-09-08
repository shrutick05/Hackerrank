function getCountOperations(word) {
  var count = 0,
      middlePos = Math.floor(word.length/2),
      reversePos;

  for (var i = 0; i < middlePos; i++) {
    reversePos = word.length - 1 - i;
    count += Math.abs(word.charCodeAt(i) - word.charCodeAt(reversePos));
  }

  return count;
}

function processData(input) {
    //Enter your code here
    var data = input.split('\n').slice(1);
  data = data.map(getCountOperations);
  process.stdout.write(data.join('\n'));
}