module.exports.add = function (string) {
  if (string.length === 0) {
    return 0
  }
  let sum = 0
  let numbers = string.split(/,|\n/g)
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i])
  }
  return sum
}
