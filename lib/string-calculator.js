exports.add = function (string) {
  let numbers = string.split(/,|\n/).map(Number)
  return numbers.reduce((a, b) => a + b)
}
