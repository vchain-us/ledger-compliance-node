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

try {
  util.dotenvAlert()

  ImmudbLcClient({
      address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
      apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
      rootPath: 'examples/root.json',
  }, main)
} catch (err) {
  console.error(err)
}

async function main(err, cl) {
  if (err) {
    return console.error(err)
  }

  async function operation(n) {
    try {
      let res = null
      let indexes = []
      for (var i=0; i < n; i++) {
        res = await cl.safeSet({ key: `concurrentKey${i}`, value: `concurrentVal${i}` })
        res && res.index && indexes.push(res.index)
        res = await cl.safeGet({ key: `concurrentKey${i}` })
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
    console.error(err)
  }
}
