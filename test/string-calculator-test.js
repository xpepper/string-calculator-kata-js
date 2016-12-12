const {equal} = require('assert')

describe('StringCalculator', function () {
  const StringCalculator = require('../lib/string-calculator')

  describe('#add', function () {
    const {add} = StringCalculator

    it('returns 0 on empty string', function () {
      equal(add(''), 0)
    })

    it('returns number for a single number string', function () {
      equal(add('1'), 1)
    })

    it('returns sum for a comma separated string with two values', function () {
      equal(add('1,2'), 3)
    })

    it('returns sum for an unknown number of comma separated values', function () {
      equal(add('1,2,3,4'), 10)
    })

    it('returns sum for an unknown number of an end-of-line separated values', function () {
      equal(add('1\n2'), 3)
    })

    it('returns sum for custom delimited values', function () {
      equal(add('//x\n1x2'), 3)
    })
  })

  describe('#parseCustomDelimiter', function () {
    const {parseCustomDelimiter: parse} = StringCalculator

    it('returns undefined if no custom delimiter is specified', function () {
      equal(parse('1,2'), undefined)
    })

    it('returns a custom delimiter', function () {
      equal(parse('//x\n1x2'), 'x')
    })
  })
})
