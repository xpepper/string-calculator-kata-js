const {equal} = require('assert')

describe('StringCalculator', function () {
  const StringCalculator = require('../lib/string-calculator')
  it('returns 0 on empty string', function () {
    equal(StringCalculator.add(''), 0)
  })

  it('returns number for a single number string', function () {
    equal(StringCalculator.add('1'), 1)
  })

  it('returns sum for a comma separated string with two values', function () {
    equal(StringCalculator.add('1,2'), 3)
  })

  it('returns sum for an unknown number of comma separated values', function () {
    equal(StringCalculator.add('1,2,3,4'), 10)
  })

  it('returns sum for an unknown number of an end-of-line separated values', function () {
    equal(StringCalculator.add('1\n2'), 3)
  })
})
