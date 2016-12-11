const assert = require('assert')
const calculator = require('../lib/string-calculator')

describe('string-calculator', function () {
  describe('add', function () {
    it('is 0 for an empty string', function () {
      assert.equal(calculator.add(''), 0)
    })

    it('is a number for a string with only a number', function () {
      assert.equal(calculator.add('1'), 1)
    })

    it('is the sum of the numbers for a string of any amount of comma-separated numbers', function () {
      assert.equal(calculator.add('1,2,3'), 6)
    })

    it('handles also \\n as number delimiter', function () {
      assert.equal(calculator.add('1\n2'), 3)
    })
  })
})
