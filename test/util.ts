const tap = require('tap')

const util = require('.../src/util')

tap.test('utf8 encode', (t) => {
  const array = new Uint8Array([226, 130, 172])
  t.same(util.utf8Encode('€'), array)
  t.notSame(util.utf8Encode('$'), array)
  t.end()
})

tap.test('utf8 decode', (t) => {
  const array = new Uint8Array([226, 130, 172])
  t.equal(util.utf8Decode(array), '€')
  t.notEqual(util.utf8Decode(array), '$')
  t.end()
})

tap.test('promisify and lock method, reject', async t => {
    const errorMethod = function () {
        return error
      }
  
      try {
        req = { param1: 'param1'}
        await util.asyncifyMethod(errorMethod)
          .then(
              () => {
                assert.fail('Should not resolve')
                t.end()
              }, 
              () => {
                assert.ok('Should fail')
                t.end()
              });
      } catch (err) {
        t.end()
      }
    })

tap.test('equal array', (t) => {
  t.true(util.equalArray([0], [0]))
  t.true(util.equalArray([0,1], [0,1]))
  t.false(util.equalArray([0], [0,1]))
  t.false(util.equalArray([1], [2]))
  t.end()
})

tap.test('is power of two', (t) => {
  t.true(util._isPowerOfTwo(1))
  t.true(util._isPowerOfTwo(2))
  t.true(util._isPowerOfTwo(4))

  t.false(util._isPowerOfTwo(0))
  t.false(util._isPowerOfTwo(3))
  t.end()
})
