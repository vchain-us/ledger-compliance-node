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
  const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))

  try {
    util.dotenvAlert()
    const cl = await ImmudbLcClient.getInstance({
      host: (process.env.LEDGER_COMPLIANCE_ADDRESS as string) || '127.0.0.1',
      port: (process.env.LEDGER_COMPLIANCE_PORT as string) || '3324',
      apiKey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: './root.json',
    })

    let res = null

    for (var i=0; i < 3; i++) {
      res = await cl.verifiedSet({ key: `${rand}-${i}`, value: `${rand}-${i}` })
      console.log('success: verifiedSet', res?.id)
    }
    
    // verifiedZAdd 1
    res = await cl.verifiedZAdd({ set: `${rand}-set`, score: 5.0, key: `${rand}-1` })
    console.log('success" verifiedZAdd', res?.id)

    // verifiedZAdd 2
    res = await cl.verifiedZAdd({ set: `${rand}-set`, score: 99.0, key: `${rand}-3` })
    console.log('success" verifiedZAdd', res?.id)

    // verifiedZAdd 3
    res = await cl.verifiedZAdd({ set: `${rand}-set`, score: 1.0, key: `${rand}-2` })
    console.log('success" verifiedZAdd', res?.id)
    
    // zScan
    res = await cl.zScan({ set: `${rand}-set` })
    console.log('success" zScan', res?.entriesList)    

  } catch (err) {
    console.error('ERROR, example:sorted_set', err)
  }
})()