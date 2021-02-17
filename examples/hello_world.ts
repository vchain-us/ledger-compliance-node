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

    // set
    req = { key: `${rand}`, value: `${rand}` }
    res = await cl.set(req)
    console.log('success: set', res.index)

    // // get
    req = { key: `${rand}` }
    res = await cl.get(req)
    console.log('success: get', res)

    // safe set
    req = { key: `${rand}-safe`, value: `${rand}-safe` }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res.index)

    // safe get
    req = { key: `${rand}-safe` }
    res = await cl.safeGet(req)
    console.log('success: safeGet', res)

    // get current root info
    res = await cl.currentRoot()
    console.log('success: currentRoot', res)

  } catch (err) {
    console.error('ERROR, example:hello_world', err)
  }
}
