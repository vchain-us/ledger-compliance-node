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

try {
  util.dotenvAlert()

  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: 'examples/rootfile',
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
    // set
    res = await cl.set({ key: 'hello', value: 'world' })
    console.log(`set result index: ${res.index}`)

    // // get
    res = await cl.get({ key: 'hello' })
    console.log('get result value:', res)

    // safe set
    res = await cl.safeSet({ key: 'safeHello', value: 'safeWorld' })
    console.log(`safe set result index: ${res.index}`)

    // safe get
    res = await cl.safeGet({ key: 'safe-hello' })
    console.log('safe get result value:', res)

  } catch (err) {
    console.error(err)
  }  
}
