const tap = require('tap')

const ImmudbClient = require('../lib/client')

const setup = (options, t, done) => {
  ImmudbClient(options, (err, cl) => {
    t.error(err)
    done(cl)
  })
}

tap.test('ops unstructured', (t) => {
  const options = {
    address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
    apikey: process.env.LEDGER_COMPLIANCE_API_KEY
  }
  setup(options, t, async function(cl) {
    try {
      let res = null
      let currentIndex = null

      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      // set
      res = await cl.set({ key: rand, value: rand })

      // get
      res = await cl.get({ key: rand })

      res = await cl.currentRoot()
      res && res.rootIndex && (currentIndex = res.rootIndex.index)

      // safeSet 1
      req = {
        key: rand+10,
        value: rand+10,
      }
      res = await cl.safeSet(req)

      // safeGet 1
      req = {
        key: rand+10,
      }
      res = await cl.safeGet(req)

      t.equal(currentIndex + 1, res.index)

      // safeSet 2 
      req = {
        key: rand+20,
        value: rand+20,
      }
      res = await cl.safeSet(req)

      // safeGet 2
      req = {
        key: rand+20,
      }
      res = await cl.safeGet(req)
      
      // safeSet 3
      req = {
        key: rand+30,
        value: rand+30,
      }
      res = await cl.safeSet(req)

      // safeGet
      req = {
        key: rand+30,
      }
      res = await cl.safeGet(req)
      
      // safeSet 4
      req = {
        key: rand+40,
        value: rand+40,
      }
      res = await cl.safeSet(req)

      // safeGet
      req = {
        key: rand+40,
      }
      res = await cl.safeGet(req)      

      t.equal(currentIndex + 4, res.index)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

