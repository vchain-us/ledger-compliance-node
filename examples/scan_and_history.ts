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
    // safe set 1
    const verifiedSetReq: types.VerifiedSetParameters = { key: `${randStr}-1`, value: `${randStr}-1` }
    const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)
    console.log('success: verifiedSet', verifiedSetRes?.id)

    // safe set 2
    const verifiedSetReq2: types.VerifiedSetParameters = { key: `${randStr}-2`, value: `${randStr}-2` }
    const verifiedSetRes2 = await cl.verifiedSet(verifiedSetReq2)
    console.log('success: verifiedSet', verifiedSetRes2?.id)
    
    // safe set 3
    const verifiedSetReq3: types.VerifiedSetParameters = { key: `${randStr}-2`, value: `${randStr}-3` }
    const verifiedSetRes3 = await cl.verifiedSet(verifiedSetReq3)    
    console.log('success: verifiedSet', verifiedSetRes3?.id)

    // scan
    const scanReq: types.ScanParameters = { prefix: randStr }
    const scanRes = await cl.scan(scanReq)
    console.log('success: scan', scanRes)

    // history
    const historyReq: types.HistoryParameters = {
      key: `${randStr}-2`,
      offset: 0,
      limit: 1,
      desc: false,
      sincetx: 0
    }
    const historyRes = await cl.history(historyReq)
    console.log('success: history', historyRes)    

  } catch (err) {
    console.error('ERROR, example:scan_and_history', err)
  }
})()
