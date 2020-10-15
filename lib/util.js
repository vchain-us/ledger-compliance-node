const AsyncLock = require('async-lock');
const sha256 = require('js-sha256')
const util = require('util')

var lock = new AsyncLock();

const utf8Encode = (val) => {
  return new util.TextEncoder("utf-8").encode(val)
}

const utf8Decode = (val) => {
  return new util.TextDecoder("utf-8").decode(val)
}

const sha256Encode = (val) => {
  return sha256(val)
}

const promisifyAndLockMethod = (method, params) => {
  return lock.acquire(method.name, function() {
    return new Promise((resolve, reject) => {
      method(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        resolve(res)
      })
    })
  }).catch(function(err) {
    console.log(err.message)
  });
}

const equalArray = (a1, a2) => {
  if (a1.length != a2.length) {
    return false
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) {
      return false
    }
  }

  return true
}

const _isPowerOfTwo = (x) => {
  return Math.log2(x) % 1 === 0
}

module.exports = {
  utf8Encode,
  utf8Decode,
  sha256Encode,
  promisifyMethod,
  equalArray,
  _isPowerOfTwo,
}
