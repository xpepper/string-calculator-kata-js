module.exports.add = function (string) {
  if (string.length === 0) {
    return 0
  }
  let customDelimiter = module.exports.parseCustomDelimiter(string)
  let sum = 0
  let numbers = string.split(/,|\n/g)
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i])
  }
  return sum
}

 module.exports.parseCustomDelimiter = function (string) {
   if(string.length > 2 && string[0] === '/' && string[1] === '/') {
     return string[2]
   } else {
     return ''
   }
 }
