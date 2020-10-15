require('dotenv').config()

const grpc = require('grpc')
const empty = require('google-protobuf/google/protobuf/empty_pb');

const messages = require('../proto/build/schema_pb')
const services = require('../proto/build/lc_grpc_pb')
const util = require('./util')
const proofs = require('./proofs')
let root = require('./root')

let client, metadata, activeDatabase,
  serverUUID

const ImmudbLcClient = (config, callback) => {
  let auth = grpc.credentials.createInsecure()
  if (config.certs) {
    auth = grpc.credentials.createSsl(config.certs);
  }

  client = new services.LcServiceClient(config.address, auth)

  activeDatabase = 'lc_immudb'

  metadata = new grpc.Metadata()
  metadata.remove('lc-api-key')
  metadata.add('lc-api-key', config.apikey)

  if (config.rootService) {
    const fallbackMessage = ', the default method will be used'
    const hasSet = config.rootService.hasOwnProperty('set')
    const hasGet = config.rootService.hasOwnProperty('get')
    const hasSetRootPath = config.rootService.hasOwnProperty('setRootPath')
    const hasCommit = config.rootService.hasOwnProperty('commit')
    !hasSet && console.error('rootService must have a \'set\' property' + fallbackMessage)
    !hasGet && console.error('rootService must have a \'get\' property' + fallbackMessage)
    !hasSetRootPath && console.error('rootService must have a \'setRootPath\' property' + fallbackMessage)
    !hasCommit && console.error('rootService must have a \'commit\' property' + fallbackMessage)            
    hasSet && hasGet && hasSetRootPath && hasCommit && (root = config.rootService)
  }

  if (config.rootPath) {
    root.setRootPath({ path: config.rootPath })
  }

  const methods = {
    set,
    get,
    safeSet,
    safeGet,
    scan,
    history,
    zAdd,
    safeZAdd,
    zScan,
    currentRoot,
    health,
    shutdown: () => {
      root.commit()
      process.exit(0)
    },
  }

  health({}, (err) => {
    if (err) {
      return callback(err)
    }
    callback(null, methods)
  })
}

// Set
const set = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(set, params)
    }

    const req = new messages.KeyValue()
    req.setKey(util.utf8Encode(params.key))
    req.setValue(util.utf8Encode(params.value))

    client.set(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set error'
        return callback(err)
      }

      callback(null, {
        index: res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// Get
const get = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(get, params)
    }

    const req = new messages.Key()
    req.setKey(util.utf8Encode(params.key))

    client.get(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Get error'
        return callback(err)
      }

      callback(null, {
        key : util.utf8Decode(res.getKey()),
        value : util.utf8Decode(res.getValue()),
        index: res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// SafeSet
const safeSet = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeSet, params)
    }

    const kv = new messages.KeyValue()
    kv.setKey(util.utf8Encode(params.key))
    kv.setValue(util.utf8Encode(params.value))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: serverUUID,
      database: activeDatabase,
    }).index)

    const req = new messages.SafeSetOptions()
    req.setKv(kv)
    req.setRootindex(index)

    client.safeSet(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeSet error'
        return callback(err)
      }

      const verifyReq = {
        proof: {
          inclusionPath: res.getInclusionpathList(),
          consistencyPath: res.getConsistencypathList(),
          index: res.getIndex(),
          at: res.getAt(),
          leaf: res.getLeaf(),
          root: res.getRoot(),
        },
        item: {
          key: util.utf8Encode(params.key),
          value: util.utf8Encode(params.value),
          index: res.getIndex(),
        },
        oldRoot: root.get({
          server: serverUUID,
          database: activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: serverUUID,
          database: activeDatabase,
          root: res.getRoot(),
          index: res.getAt(),
        })

        callback(null, {
          index: res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// SafeGet
const safeGet = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeGet, params)
    }

    const index = new messages.Index()
    index.setIndex(root.get({
      server: serverUUID,
      database: activeDatabase,
    }).index)

    const req = new messages.SafeGetOptions()
    req.setKey(util.utf8Encode(params.key))
    req.setRootindex(index)


    client.safeGet(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeGet error'
        return callback(err)
      }

      const proof = res.getProof()
      const item = res.getItem()
      const verifyReq = {
        proof: {
          inclusionPath: proof.getInclusionpathList(),
          consistencyPath: proof.getConsistencypathList(),
          index: proof.getIndex(),
          at: proof.getAt(),
          leaf: proof.getLeaf(),
          root: proof.getRoot(),
        },
        item: {
          key: item.getKey(),
          value: item.getValue(),
          index: item.getIndex(),
        },
        oldRoot: root.get({
          server: serverUUID,
          database: activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: serverUUID,
          database: activeDatabase,
          root: proof.getRoot(),
          index: proof.getAt(),
        })

        callback(null, {
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// Scan
const scan = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(scan, params)
    }

    const req = new messages.ScanOptions()
    req.setPrefix(util.utf8Encode(params.keyPrefix))
    req.setOffset(util.utf8Encode(params.offset))
    req.setLimit(params.limit)
    req.setReverse(params.reverse)
    req.setDeep(params.deep)

    client.scan(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Scan error'
        return callback(err)
      }

      const result = []
      const il = res.getItemsList()
      for (let i = 0; i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }


      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// History
const history = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(history, params)
    }

    const req = new messages.Key()
    req.setKey(util.utf8Encode(params.key))

    client.history(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'History error'
        return callback(err)
      }

      const result = []
      const il = res.getItemsList()
      for (let i = 0; i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }


      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// ZAdd
const zAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(zAdd, params)
    }

    const req = new messages.ZAddOptions()
    req.setSet(util.utf8Encode(params.set))
    req.setScore(params.score)
    req.setKey(util.utf8Encode(params.key))

    client.zAdd(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zAdd error'
        return callback(err)
      }

      callback(null, {
        index: res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// SafeZAdd
const safeZAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeZAdd, params)
    }

    const options = new messages.ZAddOptions()
    options.setSet(util.utf8Encode(params.set))
    options.setScore(params.score)
    options.setKey(util.utf8Encode(params.key))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: serverUUID,
      database: activeDatabase,
    }).index)

    const req = new messages.SafeZAddOptions()
    req.setZopts(options)
    req.setRootindex(index)

    client.safeZAdd(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'safeZAdd error'
        return callback(err)
      }

      let key2 = proofs.setKey({
        key: util.utf8Encode(params.key),
        set: util.utf8Encode(params.set),
        score: params.score
      })

      const verifyReq = {
        proof: {
          inclusionPath: res.getInclusionpathList(),
          consistencyPath: res.getConsistencypathList(),
          index: res.getIndex(),
          at: res.getAt(),
          leaf: res.getLeaf(),
          root: res.getRoot(),
        },
        item: {
          key: key2,
          value: util.utf8Encode(params.key),
          index: res.getIndex(),
        },
        oldRoot: root.get({
          server: serverUUID,
          database: activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: serverUUID,
          database: activeDatabase,
          root: res.getRoot(),
          index: res.getAt(),
        })

        callback(null, {
          index: res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// ZScan
const zScan = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(zScan, params)
    }

    const req = new messages.ZScanOptions()
    req.setSet(util.utf8Encode(params.set))
    req.setOffset(util.utf8Encode(params.offset))
    req.setLimit(params.limit)
    req.setReverse(params.reverse)

    client.zScan(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zScan error'
        return callback(err)
      }

      const result = []
      const il = res.getItemsList()
      for (let i = 0; i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }


      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// CurrentRoot
const currentRoot = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(currentRoot, params)
    }

    const req = new empty.Empty()

    client.currentRoot(req, metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Current root error'
        return callback(err)
      }

      let payload = res.getPayload()
      let signature = res.getSignature()

      root.set({
        server: serverUUID,
        database: activeDatabase,
        root: payload.getRoot(),
        index: payload.getIndex(),
      })

      callback(null, {
        rootIndex: {
          index: payload.getIndex(),
          root: payload.getRoot(),
        },
        signature: {
          signature: signature.getSignature(),
          publicKey: signature.getPublickey(),
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// Health
const health = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(health, params)
    }

    const req = new empty.Empty()

    const call = client.health(req, metadata, (err, res) => {
      if (err) {
        console.error(err);
        err.clientErr = 'Health error'
        return callback(err)
      }

      serverVersion = res.getVersion().split(' ')[1]
      callback(null, {
        status: res.getStatus(),
        version: res.getVersion(),
      })
    })

    call.on('metadata', (meta) => {
      serverUUID = meta.get('immudb-uuid')[0]
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = ImmudbLcClient 
