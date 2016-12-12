module.exports.add = function (string) {
  if (string.length === 0) {
    return 0
  }
  var delimiter = ''
  if(string.indexOf('\n') !== -1) {
    delimiter = '\n'
  } else {
    delimiter = ','
  }
  if (delimiter !== '') {
    let sum = 0
    for (let i = 0, numbers = string.split(delimiter); i < numbers.length; i++) {
      sum += parseInt(numbers[i])
    }
    return sum
  } else {
    return parseInt(string)
  }
}
