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
    return console.log(err)
  }

  try {
    const batchSize = 1

    // execute a batch insert
    req = { keys: [] }
    for (let i = 0; i < batchSize; i++) {
      req.keys.push({ key: `${rand}-${i}`, value: `${rand}-${i}` })
    }
    res = await cl.setBatch(req)
    console.log(`success: setBatch`, res)

    // execute a batch read
    req = { keys: [] }
    for (let i = 0; i < batchSize; i++) {
      req.keys.push({ key: `${rand}-${i}` })
    }
    res = await cl.getBatch(req)
    console.log(`success: getBatch`, res)
 
  } catch (err) {
    console.log('ERROR, example:batch_operations', err)
  }
}
