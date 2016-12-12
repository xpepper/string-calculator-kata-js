const {equal} = require('assert')

describe('StringCalculator', function () {
  const StringCalculator = require('../lib/string-calculator')
  it('returns 0 on empty string', function () {
    equal(StringCalculator.add(''), 0)
  })
})
