require('dotenv').config()

import grpc from '@grpc/grpc-js';
import empty from 'google-protobuf/google/protobuf/empty_pb';

import messages from './proto/schema_pb';
import services from './proto/lc_grpc_pb';
import util from './util';
import proofs from './proofs';

import root from './root'

let _client,
    _metadata,
    _activeDatabase,
    _serverUUID

const ImmudbLcClient = (config, callback) => {
  let auth = grpc.credentials.createInsecure()
  if (config.certs) {
    auth = grpc.credentials.createSsl(config.certs);
  }

  _client = new services.LcServiceClient(config.address, auth)

  _activeDatabase = 'lc_immudb'

  _metadata = new grpc.Metadata()
  _metadata && _metadata.remove('lc-api-key')
  _metadata && _metadata.add('lc-api-key', config.apikey)

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
    setBatch,
    getBatch,
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

    if (!params) {
      throw Error ('set: params is undefined')
    } else if (!params.key) {
      throw Error ('set: a valid key parameter is required')
    } else if (!params.value) {
      throw Error ('set: a valid value parameter is required')
    }

    const req = new messages.KeyValue()
    req.setKey(util.utf8Encode(params && params.key))
    req.setValue(util.utf8Encode(params && params.value))

    _client.set(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error('ERROR, client:set', err)
  }
}

// Get
const get = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(get, params)
    }

    if (!params) {
      throw Error ('get: params is undefined')
    } else if (!params.key) {
      throw Error ('get: a valid key parameter is required')
    }

    const req = new messages.Key()
    req.setKey(util.utf8Encode(params && params.key))

    _client.get(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Get error'
        return callback(err)
      }

      callback(null, {
        key : util.utf8Decode(res && res.getKey()),
        value : util.utf8Decode(res && res.getValue()),
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error('ERROR, client:get', err)
  }
}

// SafeSet
const safeSet = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeSet, params)
    }

    if (!params) {
      throw Error ('safeSet: params is undefined')
    } else if (!params.key) {
      throw Error ('safeSet: a valid key parameter is required')
    } else if (!params.value) {
      throw Error ('safeSet: a valid value parameter is required')
    }

    const kv = new messages.KeyValue()
    kv.setKey(util.utf8Encode(params && params.key))
    kv.setValue(util.utf8Encode(params && params.value))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeSetOptions()
    req.setKv(kv)
    req.setRootindex(index)

    _client.safeSet(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeSet error'
        return callback(err)
      }

      const verifyReq = {
        proof: {
          inclusionPath: res && res.getInclusionpathList(),
          consistencyPath: res && res.getConsistencypathList(),
          index: res && res.getIndex(),
          at: res && res.getAt(),
          leaf: res && res.getLeaf(),
          root: res && res.getRoot(),
        },
        item: {
          key: util.utf8Encode(params && params.key),
          value: util.utf8Encode(params && params.value),
          index: res && res.getIndex(),
        },
        oldRoot: root.get({
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: res && res.getRoot(),
          index: res && res.getAt(),
        })

        callback(null, {
          index: res && res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error('ERROR, client:safeSet', err)
  }
}

// SafeGet
const safeGet = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeGet, params)
    }

    if (!params) {
      throw Error ('safeGet: params is undefined')
    } else if (!params.key) {
      throw Error ('safeGet: a valid key parameter is required')
    }

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeGetOptions()
    req.setKey(util.utf8Encode(params && params.key))
    req.setRootindex(index)

    _client.safeGet(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeGet error'
        return callback(err)
      }

      const proof = res && res.getProof()
      const item = res && res.getItem()
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
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
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
    console.error('ERROR, client:safeGet', err)
  }
}

// SetBatch
const setBatch = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(setBatch, params)
    }

    if (!params) {
      throw Error ('setBatch: params is undefined')
    } else if (!params.keys) {
      throw Error ('setBatch: a valid keys parameter is required')
    }

    const req = new messages.KVList()

    for (let i = 0; params && params.keys && i < params.keys.length; i++) {
      const kv = new messages.KeyValue() 
      kv.setKey(util.utf8Encode(params && params.keys[i] && params.keys[i].key))
      kv.setValue(util.utf8Encode(params && params.keys[i] && params.keys[i].value))
      req.addKvs(kv)
    }

    _client.setBatch(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set batch error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error('ERROR, client:setBatch', err)
  }
}

// GetBatch
const getBatch = (params, callback) => {
  try {
      if (!callback) {
      return util.promisifyAndLockMethod(getBatch, params)
      }

      if (!params) {
        throw Error ('getBatch: params is undefined')
      } else if (!params.keys) {
        throw Error ('getBatch: a valid keys parameter is required')
      }

      const l = []
      for (let i = 0; params && params.keys && i < params.keys.length; i++) {
        const key = new messages.Key()
        key.setKey(util.utf8Encode(params && params.keys[i] && params.keys[i].key))
        l.push(key)
      }

      const req = new messages.KeyList()
      req.setKeysList(l)

      _client.getBatch(req, _metadata, (err, res) => {
      if (err) {
          err.clientErr = 'Get batch error'
          return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
          let item = il[i]
          result.push({
            key: util.utf8Decode(item.getKey()),
            value: util.utf8Decode(item.getValue()),
            index: item.getIndex(),
          })
      }

      callback(null, {
          items: result,
      })
    })
  } catch (err) {
      console.error('ERROR, client:getBatch', err)
  }
}

// Scan
const scan = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(scan, params)
    }

    if (!params) {
      throw Error ('scan: params is undefined')
    } else if (!params.keyPrefix) {
      throw Error ('scan: a valid keyPrefix parameter is required')
    }

    const req = new messages.ScanOptions()
    req.setPrefix(util.utf8Encode(params && params.keyPrefix))
    req.setOffset(util.utf8Encode(params && params.offset))
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)
    req.setDeep(params && params.deep)

    _client.scan(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Scan error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
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
    console.error('ERROR, client:scan', err)
  }
}

// History
const history = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(history, params)
    }

    if (!params) {
      throw Error ('history: params is undefined')
    } else if (!params.keyPrefix) {
      throw Error ('history: a valid keyPrefix parameter is required')
    }

    const req = new messages.HistoryOptions()
    req.setKey(util.utf8Encode(params && params.keyPrefix))
    req.setOffset(params && params.offset)
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)

    _client.history(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'History error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
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
    console.error('ERROR, client:history', err)
  }
}

// ZAdd
const zAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(zAdd, params)
    }

    if (!params) {
      throw Error ('zAdd: params is undefined')
    } else if (!params.set) {
      throw Error ('zAdd: a valid set parameter is required')
    }

    const req = new messages.ZAddOptions()
    req.setSet(util.utf8Encode(params && params.set))
    req.setScore(params && params.score)
    req.setKey(util.utf8Encode(params && params.key))

    _client.zAdd(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zAdd error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error('ERROR, client:zAdd', err)
  }
}

// SafeZAdd
const safeZAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(safeZAdd, params)
    }

    if (!params) {
      throw Error ('safeZAdd: params is undefined')
    } else if (!params.set) {
      throw Error ('safeZAdd: a valid set parameter is required')
    }

    const options = new messages.ZAddOptions()
    options.setSet(util.utf8Encode(params && params.set))
    options.setScore(params && params.score)
    options.setKey(util.utf8Encode(params && params.key))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeZAddOptions()
    req.setZopts(options)
    req.setRootindex(index)

    _client.safeZAdd(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'safeZAdd error'
        return callback(err)
      }

      let key2 = proofs.setKey({
        key: util.utf8Encode(params && params.key),
        set: util.utf8Encode(params && params.set),
        score: params && params.score
      })

      const verifyReq = {
        proof: {
          inclusionPath: res && res.getInclusionpathList(),
          consistencyPath: res && res.getConsistencypathList(),
          index: res && res.getIndex(),
          at: res && res.getAt(),
          leaf: res && res.getLeaf(),
          root: res && res.getRoot(),
        },
        item: {
          key: key2,
          value: util.utf8Encode(params && params.key),
          index: res && res.getIndex(),
        },
        oldRoot: root.get({
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: res && res.getRoot(),
          index: res && res.getAt(),
        })

        callback(null, {
          index: res && res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error('ERROR, client:safeZAdd', err)
  }
}

// ZScan
const zScan = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(zScan, params)
    }

    if (!params) {
      throw Error ('zScan: params is undefined')
    } else if (!params.set) {
      throw Error ('zScan: a valid set parameter is required')
    }

    const req = new messages.ZScanOptions()
    req.setSet(util.utf8Encode(params && params.set))
    req.setOffset(util.utf8Encode(params && params.offset))
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)

    _client.zScan(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zScan error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
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
    console.error('ERROR, client:zScan', err)
  }
}

// CurrentRoot
const currentRoot = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(currentRoot, params)
    }

    const req = new empty.Empty()

    _client.currentRoot(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Current root error'
        return callback(err)
      }

      let payload = res && res.getPayload()
      let signature = res && res.getSignature()

      root.set({
        server: _serverUUID,
        database: _activeDatabase,
        root: payload && payload.getRoot(),
        index: payload && payload.getIndex(),
      })

      callback(null, {
        rootIndex: {
          index: payload && payload.getIndex(),
          root: payload && payload.getRoot(),
        },
        signature: {
          signature: signature && signature.getSignature(),
          publicKey: signature && signature.getPublickey(),
        },
      })
    })
  } catch (err) {
    console.error('ERROR, client:currentRoot', err)
  }
}

// Health
const health = (params, callback) => {
  try {
    if (!callback) {
      return util.promisifyAndLockMethod(health, params)
    }

    const req = new empty.Empty()

    const call = _client.health(req, _metadata, (err, res) => {
      if (err) {
        console.error(err);
        err.clientErr = 'Health error'
        return callback(err)
      }

      serverVersion = res && res.getVersion().split(' ')[1]
      callback(null, {
        status: res && res.getStatus(),
        version: res && res.getVersion(),
      })
    })

    call.on('metadata', (meta) => {
      _serverUUID = meta.get('immudb-uuid')[0]
    })
  } catch (err) {
    console.error('ERROR, client:health', err)
  }
}

export default ImmudbLcClient 
