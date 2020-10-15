# ledger compliance nodejs sdk [![License](https://img.shields.io/github/license/codenotary/immudb-node)](LICENSE)

[![Slack](https://img.shields.io/badge/join%20slack-%23immutability-brightgreen.svg)](https://slack.vchain.us/) [![Discuss at immudb@googlegroups.com](https://img.shields.io/badge/discuss-immudb%40googlegroups.com-blue.svg)](https://groups.google.com/group/immudb)

### Official [ledger compliance] client for nodejs.

[ledger compliance]: https://tobedefined.io/


## Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quickstart](#quickstart)
  * [Creating a Client](#creating-a-client)
  * [Traditional read and write](#traditional-read-and-write)
  * [Verified or Safe read and write](#verified-or-safe-read-and-write)
  * [Closing the client](#closing-the-client)
- [Contributing](#contributing)

## Introduction

Ledger compliance nodejs sdj implements a [grpc] ledger compliance client.
Backed by [immudb](https://github.com/codenotary/immudb) it uses several common part that are implemented in the immudb go sdk, but simplifying it more.
Latest validated ledger state may be keep in the local filesystem when initialising the client with the rootPath option, please read [immudb research paper] for details of how immutability is ensured by [immudb].

[grpc]: https://grpc.io/
[immudb research paper]: https://immudb.io/
[immudb]: https://immudb.io/

## Prerequisites

Ledger compliance nodejs sdk assumes an already running ledger server.

Before starting an .env file with the following settings is required

```
LEDGER_COMPLIANCE_ADDRESS=<ledger_compliance_url>
LEDGER_COMPLIANCE_PORT=3324
LEDGER_COMPLIANCE_API_KEY=<ledger_compliance_api_key>
```

To obtain a valid apikey please register on ledger compliance frontend, create a new ledger and retrieve the apikey after following creation wizard.

## Installation

Just include immudb-node as a dependency in your project:
```
const ImmudbLcClient = require('ledger-compliance-node')
```

## Quickstart

Example can be found in the [example folder](/examples)


### Creating a Client

The following code snippets shows how to create a client.

Using default configuration:
```
ImmudbClient({
  address: `${process.env.LEDGER_COMPLIANCE_ADDRESS}:${process.env.LEDGER_COMPLIANCE_PORT}`,
  apikey: process.env.LEDGER_COMPLIANCE_API_KEY,
  rootPath: 'root.json'
}, (err, cl) => {
  if (err) {
    return console.log(err)
  }

  // Interact with the client.
  res = await cl.safeSet({ key: 'key', value: 'val' })
  console.log('safeSet result index', res.index)  
})
```

### Traditional read and write

Ledger compliance provides read and write operations that behave as a traditional
key-value store i.e. no cryptographic verification is done. This operations
may be used when validations can be post-poned:

```
let res = await cl.set({ key: 'key1', value: 'value1' })
console.log(res.index)

res = await cl.get({ key: 'key1' })
console.log(res.key, res.value, res.index)
```

### Verified or Safe read and write

Ledger compliance provides built-in cryptographic verification for any entry. The client implements the mathematical validations while the application uses as a traditional read or write operation:

```
try {
  let res = await cl.safeSet({ key: 'key1', value: 'value1' })
  console.log(res.index)

  res = await cl.safeGet({ key: 'key1' })
  console.log(res.key, res.value, res.index)
} catch (err) {
  if (err.clientErr == cl.proofErr) {
    // Proof does not verify.
  }
  console.log(err)
}
```
### Closing the client

To programatically close the connection with ledger server use the `shutdown` operation:
 
 ```
 cl.shutdown()
 ```

Note: after shutdown, a new client needs to be created to estabilish a new connection.

## Contributing

We welcome contributions. Feel free to join the team!

To report bugs or get help, use [GitHub's issues].

[GitHub's issues]: https://github.com/codenotary/immudb-node/issues
