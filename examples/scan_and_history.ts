/*
Copyright 2019-2021 CodeNotary, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
	http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import ImmudbLcClient from "../src/client"
import util from "./src/util"

try {
  util.dotenvAlert()

  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: './root.json',
  }, main)
} catch (err) {
  console.error(err)
}

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))

async function main(err, cl) {
  if (err) {
    return console.error(err)
  }

  try {
    let res = null

    // safe set 1
    req = { key: `${rand}-1`, value: `${rand}-1` }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res && res.index)

    // safe set 2
    req = { key: `${rand}-2`, value: `${rand}-2` }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res && res.index)
    
    // safe set 3
    req = { key: `${rand}-2`, value: `${rand}-3` }
    res = await cl.safeSet(req)    
    console.log('success: safeSet', res && res.index)

    // scan
    req = { keyPrefix: rand }
    res = await cl.scan(req)
    console.log('success: scan', res)

    // history
    req = {
        keyPrefix: `${rand}-2`,
        offset: 0,
        limit: 1,
        reverse: false
    }
    res = await cl.history(req)
    console.log('succes: history', res)    

  } catch (err) {
    console.error('ERROR, example:scan_and_history', err)
  }
}
