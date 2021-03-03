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
    host: process.env.LEDGER_COMPLIANCE_ADDRESS as string,
    port: process.env.LEDGER_COMPLIANCE_PORT as string,
    apiKey: process.env.LEDGER_COMPLIANCE_API_KEY as string,
    rootPath: './root.json',
  })
  
  const randNum = Math.floor(Math.random() * Math.floor(10))
  const randStr = `rand${randNum}`;

  async function operation(n: number) {
    try {
      let indexes = []
      
      for (var i=0; i < n; i++) {
        const verifiedSetReq: types.VerifiedSetParameters = { key: `${randStr}-${i}`, value: `${randStr}-${i}` }
        const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)

        if (verifiedSetRes) {
          indexes.push(verifiedSetRes.id)
        }
        
        const verifiedGetReq: types.VerifiedGetParameters = { key: `${randStr}-${i}` }
        const verifiedGetRes = await cl.verifiedGet(verifiedGetReq)
      }
      return indexes
    } catch (err) {
      console.error(err)
    }
  }

  try {
    Promise.all([
      operation(10),
      operation(7),
      operation(13),
    ]).then(([indexes1, indexes2, indexes3]) => {
      console.log(indexes1)
      console.log(indexes2)
      console.log(indexes3)
    }).catch((err) => console.log(err))
  } catch (err) {
    console.error('ERROR, example:concurrency', err)
  }
})()
