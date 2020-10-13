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
const util = require("util/dotenv_alert")

try {
  util.dotenvAlert()
  
  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: 'examples/rootfile'
  }, main)
} catch (err) {
  console.error(err)
}

async function main(err, cl) {
  if (err) {
    return console.error(err)
  }

  try {
    // set 1
    res = await cl.set({ key: 'key1', value: 'val1' })
    console.log(`set result index: ${res.index}`)

    res = await cl.set({ key: 'key2', value: 'val2' })
    console.log(`set result index: ${res.index}`)

    res = await cl.set({ key: 'key3', value: 'val3' })
    console.log(`set result index: ${res.index}`)

    // safeZAdd 1
    res = await cl.safeZAdd({ set: 'my-sorted-set', score: 5, key: 'key1' })
    
    // safeZAdd 2
    res = await cl.safeZAdd({ set: 'my-sorted-set', score: 99, key: 'key3' })

    // safeZAdd 3
    res = await cl.safeZAdd({ set: 'my-sorted-set', score: 1, key: 'key2' })
    
    // zScan
    res = await cl.zScan({ set: 'my-sorted-set' })
    console.log(`zScan list: ${res.index}`)    

  } catch (err) {
    console.error(err)
  }
}
