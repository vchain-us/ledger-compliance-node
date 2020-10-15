/*
Copyright 2019-2020 vChain, Inc.
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

const ImmudbLcClient = require("../lib/client")
const util = require("./lib/util")

const prefix = 'sorted'

try {
  util.dotenvAlert()
  
  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: 'examples/root.json',
  }, main)
} catch (err) {
  console.error(err)
}

async function main(err, cl) {
  if (err) {
    return console.error(err)
  }

  try {
    let res = null

    for (var i=0; i < 3; i++) {
      res = await cl.safeSet({ key: `${prefix}-key${i}`, value: `${prefix}-val${i}` })
      console.log(`${prefix}: set result index`, res.index)
    }
    
    // safeZAdd 1
    res = await cl.safeZAdd({ set: `my-${prefix}-set`, score: 5.0, key: `${prefix}-key1` })
    console.log(`${prefix}: safeZAdd result index`, res.index)

    // safeZAdd 2
    res = await cl.safeZAdd({ set: `my-${prefix}-set`, score: 99.0, key: `${prefix}-key3` })
    console.log(`${prefix}: safeZAdd result index`, res.index)

    // safeZAdd 3
    res = await cl.safeZAdd({ set: `my-${prefix}-set`, score: 1.0, key: `${prefix}-key2` })
    console.log(`${prefix}: safeZAdd result index`, res.index)
    
    // zScan
    res = await cl.zScan({ set: `my-${prefix}-set` })
    console.log(`${prefix}: zScan list: ${res.index}`)    

  } catch (err) {
    console.error(err)
  }
}
