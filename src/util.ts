import AsyncLock from 'async-lock'

import util from 'util'

var lock = new AsyncLock();

const utf8Encode = (val: string): Uint8Array => {
  return new util.TextEncoder().encode(val)
}

const utf8Decode = (val: Uint8Array) => {
  return new util.TextDecoder("utf-8").decode(val)
}

const promisifyAndLockMethod = (method: Function, params) => {
  const key = method.name 
  return lock.acquire(key, function() {
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

export default {
  utf8Encode,
  utf8Decode,
  promisifyAndLockMethod,
  equalArray,
  _isPowerOfTwo,
}
