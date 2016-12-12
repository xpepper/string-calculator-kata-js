module.exports.add = function (string) {
  if (string.length === 0) {
    return 0
  }
  if (string.indexOf(',') !== -1) {
    let numbers = string.split(',')
    return parseInt(numbers[0]) + parseInt(numbers[1])
  } else {
    return parseInt(string)
  }
}
