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
    host: (process.env.LEDGER_COMPLIANCE_ADDRESS as string) || '127.0.0.1',
    port: (process.env.LEDGER_COMPLIANCE_PORT as string) || '3324',
    apiKey: process.env.LEDGER_COMPLIANCE_API_KEY as string,
    rootPath: './root.json',
  });
  
  const randNum = Math.floor(Math.random() * Math.floor(10));
  const randStr = `rand${randNum}`;

  try {
    for (var i=0; i < 3; i++) {
      const verifiedSetReq: Parameters.VerifiedSet = {
        key: `${randStr}-${i}`,
        value: `${randStr}-${i}`
      }
      const verifiedSetRes = await cl.verifiedSet(verifiedSetReq)
      console.log('success: verifiedSet', verifiedSetRes?.id)
    }
    
    // verifiedZAdd 1
    const verifiedZAddReq: Parameters.VerifiedZAdd = {
      set: `${randStr}-set`,
      score: 5.0,
      key: `${randStr}-0`
    }
    const verifiedZAddRes = await cl.verifiedZAdd(verifiedZAddReq)
    console.log('success: verifiedZAdd', verifiedZAddRes?.id)

    // verifiedZAdd 2
    const verifiedZAddReq2: Parameters.VerifiedZAdd = {
      set: `${randStr}-set`,
      score: 99.0,
      key: `${randStr}-2`
    }
    const verifiedZAddRes2 = await cl.verifiedZAdd(verifiedZAddReq2)
    const txId = verifiedZAddRes2?.id
    console.log('success: verifiedZAdd', txId)

    if (!txId) {
      throw new Error();
    }

    // verifiedZAdd 3
    const verifiedZAddReq3: Parameters.VerifiedZAdd = {
      set: `${randStr}-set`,
      score: 1.0, 
      key: `${randStr}-1`
    }
    const verifiedZAddRes3 = await cl.verifiedZAdd(verifiedZAddReq3)
    console.log('success: verifiedZAdd', verifiedZAddRes3?.id)
    
    // zScan
    const zScanReq: Parameters.ZScan = {
      set: `${randStr}-set`,
      seekkey: `${randStr}-2`,
      seekscore: 99.0,
      seekattx: txId,
      inclusiveseek: true,
      limit: 10,
      desc: false,
      sincetx: 0,
      nowait: false
    }
    const zScanRes = await cl.zScan(zScanReq)
    console.log('success: zScan', zScanRes?.entriesList)    

  } catch (err) {
    console.error('ERROR, example:sorted_set', err)
  }  
})()