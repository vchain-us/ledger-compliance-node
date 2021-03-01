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

(async () => {
  util.dotenvAlert()

  const rand = '' + Math.floor(Math.random()
    * Math.floor(100000))

  // const rand = '29398'

  try {
    const cl = await ImmudbLcClient.getInstance({
      host: (process.env.LEDGER_COMPLIANCE_CERTIFIED_ADDRESS as string) || '127.0.0.1',
      port: (process.env.LEDGER_COMPLIANCE_CERTIFIED_PORT as string) || '3324',
      apiKey: process.env.LEDGER_COMPLIANCE_CERTIFIED_API_KEY as string,
      rootPath: './root.json',
    })

    // // set
    // const setReq = { key: `${rand}`, value: `${rand}` }
    // const setRes = await cl.set(setReq)
    // console.log('success: set', setRes?.id)

    // // // get
    // const getReq = { key: `${rand}` }
    // const getRes = await cl.get(getReq)
    // console.log('success: get', getRes)

    console.log('rand: ', rand)

    // safe set
    const verifiedSetReq = { key: `${rand}-safe`, value: `${rand}-safe` }
    const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)
    console.log('success: safeSet', verifiedSetRes?.id)

    // // safe get
    // const verifiedGetReq = { key: `${rand}-safe` }
    // const verifiedGetRes = await cl.verifiedGet(verifiedGetReq)
    // console.log('success: safeGet', verifiedGetRes)

    // // get current root info
    // const currentStateRes = await cl.currentState()
    // console.log('success: currentRoot', currentStateRes)

  } catch (err) {
    console.error('ERROR, example:hello_world', err)
  }
})()