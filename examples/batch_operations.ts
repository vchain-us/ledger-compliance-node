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
import Parameters from '../types/parameters'

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

  try {
    const batchSize = 1

    // execute a batch insert
    const setAllReq: Parameters.SetAll = { kvsList: [] }
    for (let i = 0; i < batchSize; i++) {
      setAllReq.kvsList.push({
        key: `${randStr}-${i}`,
        value: `${randStr}-${i}`
      })
    }
    const setAllRes = await cl.setAll(setAllReq)
    console.log(`success: setAll`, setAllRes)

    // execute a batch read
    const getAllReq: Parameters.GetAll = { keysList: [], sincetx: 0 }
    for (let i = 0; i < batchSize; i++) {
      getAllReq.keysList.push(`${randStr}-${i}`)
    }
    const getAllRes = await cl.getAll(getAllReq)
    console.log(`success: getAll`, getAllRes)
 
  } catch (err) {
    console.log('ERROR, example:batch_operations', err)
  }
})()
