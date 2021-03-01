import tap from 'tap'

import * as schemaTypes from '../src/proto/schema_pb';
import ImmudbLcClient from '../src/client'
import { HistoryParameters, ZScanParameters } from '../src/types'

const options = {
  host: process.env.LEDGER_COMPLIANCE_CERTIFIED_ADDRESS as string,
  port: process.env.LEDGER_COMPLIANCE_CERTIFIED_PORT as string,
  apiKey: process.env.LEDGER_COMPLIANCE_CERTIFIED_API_KEY as string
}

tap.test('operations', async t => {
    const cl = await ImmudbLcClient.getInstance(options)
    
    try {
      const randNum = Math.floor(Math.random()
        * Math.floor(100000))
      const randStr = `${randNum}`

      // test: add new item having the specified key
      // and value
      const setReq = { key: randStr, value: randStr }
      const setRes = await cl.set(setReq)

      // test: get item by key
      const getReq = { key: randStr }
      const getRes = await cl.get(getReq)

      // test: iterate over keys having the specified
      // prefix
      const scanReq = {
        keyPrefix: randStr,
        offset: '10',
        limit: 5,
        reverse: false,
        deep: false,
      }
      const scanRes = await cl.scan(scanReq)

      // history: fetch history for the item having the
      // specified key
      const historyReq: HistoryParameters = {
        key: randStr,
        offset: 10,
        limit: 5,
        desc: false,
        sincetx: randNum
      }
      const historyRes = await cl.history(historyReq)

      // test: iterate over a sorted set
      const zScanReq: ZScanParameters = {
        set: 'test',
        seekkey: '',
        seekscore: 0,
        seekattx: 0,
        inclusiveseek: true,
        limit: 5,
        desc: true,
        sincetx: 0,
        nowait: true
      }
      const zScanRes = await cl.zScan(zScanReq)

      // test: add new item having the specified key
      // and value
      const setRes2 = await cl.set({ key: `${randNum * 2}`, value: `${randNum * 2}` })

      // test: get current root info
      const currentStateRes = await cl.currentState()

      // test: safely add new item having the specified key
      // and value
      const verifiedSetReq = {
        key: `${randNum+10}`,
        value: `${randNum+10}`,
      }
      const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)

      // test: get current root info
      const currentStateRes2 = await cl.currentState()

      // test: safely add new item having the specified key
      // and value
      const verifiedSetReq2 = {
        key: `${randNum + 11}`,
        value: `${randNum + 11}`,
      }
      const verifiedSetRes2 = await cl.verifiedSet(verifiedSetReq2)

      // test: safely add new item having the specified key
      // and value
      const verifiedSetReq3 = {
        key: `${randNum + 12}`,
        value: `${randNum + 12}`,
      }
      const verifiedSetRes3 = await cl.verifiedSet(verifiedSetReq3)

      // test: safely get item by key
      const verifiedGetReq = {
        key: `${randNum + 12}`,
      }
      const verifiedGetRes = await cl.verifiedGet(verifiedGetReq)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
  
  tap.test('batches', async t => {
    const cl = await ImmudbLcClient.getInstance(options)

    try {
      const randStr = `${Math.floor(Math.random() * Math.floor(100000))}`
    
      const batchSize = 20

      // test: execute a batch insert
      const setAllReq: schemaTypes.SetRequest.AsObject = { kvsList : [] }
      for (let i = 0; i < batchSize; i++) {
        setAllReq.kvsList.push({ key: `${randStr}-${i}`, value: `${randStr}-${i}` })
      }
      const res = await cl.setAll(setAllReq)

      // test: execute a batch read
      const getAllReq: schemaTypes.KeyListRequest.AsObject = { keysList : [], sincetx: 0 }
      for (let i = 0; i < batchSize; i++) {
        getAllReq.keysList.push(`${randStr}-${i}`)
      }
      const getAllRes = await cl.getAll(getAllReq)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
  
  
  