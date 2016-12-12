module.exports = { add, parseCustomDelimiter }

function add (string) {
  if (string.length === 0) {
    return 0
  }
  let customDelimiter = parseCustomDelimiter(string)
  let sum = 0
  let numbers
  if (customDelimiter) {
    string = string.substr(3, string.length)
    numbers = string.split(customDelimiter)
  } else {
    numbers = string.split(/,|\n/g)
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i])
  }
  return sum
}

function parseCustomDelimiter (string) {
  if (string.length > 2 && string[0] === '/' && string[1] === '/') {
    return string[2]
  }
}
