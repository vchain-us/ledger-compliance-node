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
import * as types from '../src/types'

util.dotenvAlert();

(async () => {
  const cl = await ImmudbLcClient.getInstance({
    host: (process.env.LEDGER_COMPLIANCE_ADDRESS as string) || '127.0.0.1',
    port: (process.env.LEDGER_COMPLIANCE_PORT as string) || '3324',
    apiKey: process.env.LEDGER_COMPLIANCE_API_KEY as string,
    rootPath: './root.json',
  })
  
  const randNum = Math.floor(Math.random() * Math.floor(10));
  const randStr = `rand${randNum}`;
  try {

    // set
    const setReq: types.SetParameters = { key: randStr, value: randStr }
    const setRes = await cl.set(setReq)
    console.log('success: set', setRes?.id)

    // // get
    const getReq: types.GetParameters = { key: randStr }
    const getRes = await cl.get(getReq)
    console.log('success: get', getRes)

    // safe set
    const verifiedSetReq: types.VerifiedSetParameters = { key: `${randStr}-safe`, value: `${randStr}-safe` }
    const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)
    console.log('success: verifiedSet', verifiedSetRes?.id)

    // safe get
    const verifiedGetReq: types.VerifiedGetParameters = { key: `${randStr}-safe` }
    const verifiedGetRes = await cl.verifiedGet(verifiedGetReq)
    console.log('success: verifiedGet', verifiedGetRes)

    // get current state info
    const currentStateRes = await cl.currentState()
    console.log('success: currentState', currentStateRes)

  } catch (err) {
    console.error('ERROR, example:hello_world', err)
  }
})()