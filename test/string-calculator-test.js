const {equal} = require('assert')

describe('StringCalculator', function () {
  const StringCalculator = require('../lib/string-calculator')
  it('returns 0 on empty string', function () {
    equal(StringCalculator.add(''), 0)
  })

  it('returns number for a single number string', function () {
    equal(StringCalculator.add('1'), 1)
  })
})
