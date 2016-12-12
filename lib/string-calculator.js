module.exports.add = function (string) {
  if (string.length === 0) {
    return 0
  }
  if (string.indexOf(',') !== -1) {
    let sum = 0
    for (let i = 0, numbers = string.split(','); i < numbers.length; i++) {
      sum += parseInt(numbers[i])
    }
    return sum
  } else {
    return parseInt(string)
  }
}
