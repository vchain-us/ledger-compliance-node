import tap from 'tap'

import ImmudbClient from '../src/client'

const setup = (options, t, done) => {
  ImmudbClient(options, (err, cl) => {
    t.error(err)
    done(cl)
  })
}

tap.test('operations', (t) => {
    const options = {
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY
    }
    setup(options, t, async function(cl) {
      try {
        const rand = '' + Math.floor(Math.random()
          * Math.floor(100000))
  
        // test: add new item having the specified key
        // and value
        req = { key: rand, value: rand }
        res = await cl.set(req)
        const index = res && res.index // saving for byIndex
  
        // test: get item by key
        req = { key: rand }
        res = await cl.get({ key: rand })
  
        // test: iterate over keys having the specified
        // prefix
        req = {
          keyPrefix: rand,
          offset: '10',
          limit: 5,
          reverse: false,
          deep: false,
        }
        res = await cl.scan(req)
  
        // history: fetch history for the item having the
        // specified key
        req = {
          keyPrefix: rand,
          offset: 0,
          limit: 1,
          reverse: false
        }
        res = await cl.history(req)
  
        // test: iterate over a sorted set
        req = {
          set: rand,
          offset: '10',
          limit: 5,
          reverse: false,
        }
        res = await cl.zScan(req)
  
        // test: add new item having the specified key
        // and value
        res = await cl.set({ key: rand*2, value: rand*2 })
  
        // test: get current root info
        res = await cl.currentRoot()
  
        // test: safely add new item having the specified key
        // and value
        req = {
          key: rand+10,
          value: rand+10,
        }
        res = await cl.safeSet(req)
  
        // test: get current root info
        res = await cl.currentRoot()
  
        // test: safely add new item having the specified key
        // and value
        req = {
          key: rand+11,
          value: rand+11,
        }
        res = await cl.safeSet(req)
  
        // test: safely add new item having the specified key
        // and value
        req = {
          key: rand+12,
          value: rand+12,
        }
        res = await cl.safeSet(req)
  
        // test: safely get item by key
        req = {
          key: rand+12,
        }
        res = await cl.safeGet(req)
  
        t.end()
      } catch (err) {
        t.error(err)
      }
    })
  })
  
  tap.test('batches', (t) => {
    const options = {
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY
    }
    setup(options, t, async function(cl) {
      try {
        const rand = '' + Math.floor(Math.random()
          * Math.floor(100000))
      
        const batchSize = 20

        // test: execute a batch insert
        req = { keys : [] }
        for (let i = 0; i < batchSize; i++) {
          req.keys.push({ key: `${rand}-${i}`, value: `${rand}-${i}` })
        }
        res = await cl.setBatch(req)
  
        // test: execute a batch read
        req = { keys : [] }
        for (let i = 0; i < batchSize; i++) {
          req.keys.push({ key: `${rand}-${i}` })
        }
        res = await cl.getBatch(req)
  
        t.end()
      } catch (err) {
        t.error(err)
      }
    })
  })
  
  
  