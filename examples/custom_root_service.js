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
const _root = require('./lib/root')

const prefix = 'custom-root'

try {
  util.dotenvAlert()

  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: 'examples/root.json',
      rootService: _root
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

    // safe set
    res = await cl.set({ key: `${prefix}-safe-key`, value: `${prefix}-safe-val` })
    console.log(`${prefix}: safeSet result index ${res.index}`)

    // safe get
    res = await cl.get({ key: `${prefix}-safe-key` })
    console.log(`${prefix}: safeGet result value`, res)

  } catch (err) {
    console.error(err)
  }  
}
