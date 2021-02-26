import { Metadata } from 'grpc';
import fs, { stat } from 'fs'

import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/lc_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';
import { hashUint8Array, utf8Encode } from './util';
import { DEFAULT_DATABASE } from './consts';

type ServerState = {
  state: schemaTypes.ImmutableState.AsObject
  apiKeyHash: number[]
}
type Server = ServerState[]
type Servers = { [key: string]: Server }
type PreparedServerState = ServerState & {
  state: Omit<schemaTypes.ImmutableState.AsObject, 'txhash'> & { txhash: number[] }
}
type PreparedServer = PreparedServerState[]
type PreparedServers = { [key: string]: PreparedServer }
type StateGetMetadata = {
    serverName: string
    apiKey: string
    metadata: Metadata
}
type StateSetMetadata = {
    serverName: string
    apiKey: string
}

type StateConfig = {
    client: services.LcServiceClient
    rootPath?: string
}

enum Signals {
    EXIT = 'exit',
    SIGINT = 'SIGINT',
    UNCAUGHT_EXCEPTION = 'uncaughtException'
}

const getApiKeySha = (apiKey: string) => Array.from(hashUint8Array(utf8Encode(apiKey)))

class State {
    public servers: Servers
    public client: services.LcServiceClient
    public rootPath: string

    constructor({ client, rootPath = 'root' }: StateConfig) {
        const handleExit = () => {
            this.exitHandler()
        }
        (process as NodeJS.EventEmitter).on(Signals.EXIT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.SIGINT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.UNCAUGHT_EXCEPTION, handleExit);

        this.client = client
        this.rootPath = rootPath

        this.servers = this.getInitialState()
    }

    async get (config: StateGetMetadata): Promise<schemaTypes.ImmutableState> {
        const { serverName, apiKey } = config
        const apiKeyHash = getApiKeySha(apiKey)
        const server = this.servers[serverName]

        if (server !== undefined) {
            const serverStateData = server.find(state => state.apiKeyHash === apiKeyHash)

            if (serverStateData !== undefined) {
                if (Object.keys(serverStateData.state).length > 0) {
                  const { db, txid, txhash, signature } = serverStateData.state
                  const iState = new schemaTypes.ImmutableState()
  
                  iState.setDb(db)
                  iState.setTxid(txid)
                  iState.setTxhash(txhash)
                  if (signature !== undefined) {
                      const sgntr = new schemaTypes.Signature()
  
                      sgntr.setSignature(signature.signature)
                      sgntr.setPublickey(signature.publickey)
  
                      iState.setSignature(sgntr)
                  }
  
                  return iState
                } else {
                  return await this.getCurrentState(config)
                }
            } else {
                return await this.getCurrentState(config)
            }
        } else {
            return await this.getCurrentState(config)
        }
    }

    async getCurrentState(config: StateGetMetadata): Promise<schemaTypes.ImmutableState> {
        const { metadata } = config
        return new Promise((resolve, reject) => this.client.currentState(new empty.Empty(), metadata, (err, res) => {
            if (err) {
                reject(err);
            }

            const stateObject: schemaTypes.ImmutableState.AsObject = {
                db: res.getDb(),
                txid: res.getTxid(),
                txhash: res.getTxhash_asU8(),
                signature: res.getSignature()?.toObject()
            };
            const state = new schemaTypes.ImmutableState()
            const sgntr = new schemaTypes.Signature()

            if (stateObject.signature !== undefined) {
                sgntr.setSignature(stateObject.signature.signature)
                sgntr.setPublickey(stateObject.signature.publickey)
            }

            state.setDb(DEFAULT_DATABASE)
            state.setTxid(stateObject.txid)
            state.setTxhash(stateObject.txhash)
            state.setSignature(sgntr)

            this.set(config, stateObject);

            resolve(state);
        }))
    }
 
    set ({ serverName, apiKey }: StateSetMetadata, state: schemaTypes.ImmutableState.AsObject) {
        const server = this.servers[serverName] || [] as Server
        const apiKeyHash = getApiKeySha(apiKey)
        
        server.push({
          apiKeyHash,
          state
        })
        this.servers[serverName] = server
    }
    
    getInitialState(): Servers {
        try {
            if (fs.existsSync(this.rootPath)) {
                const rawdata = fs.readFileSync(this.rootPath, 'utf-8')

                return this.parseServers(rawdata)
            } else {
                return {} as Servers;
            }     
        } catch(err) {
            console.error(err)
            throw new Error('Error getting initial state')
        }
    }

    commit() {
        try {
            const data = this.stringifyServers()

            fs.writeFileSync(this.rootPath, data)
        } catch (err) {
            console.error(err)
        }
    }

    exitHandler() {
        this.commit()
    }

    stringifyServers() {
        const serverNames = Object.keys(this.servers)

        const servers: PreparedServers = serverNames.reduce((sAcc, serverName) => {
            const server = this.servers[serverName].map(({ state, apiKeyHash }) => {
              const stringifiedState = Object.assign({}, state, { txhash: Array.from(state.txhash as Uint8Array) })

              return Object.assign({ state: stringifiedState, apiKeyHash })
            })

            return Object.assign({}, sAcc, { [serverName]: server })
        }, {})

        return JSON.stringify(servers)
    }

    parseServers(stringifiedServers: string): Servers {
        const data = JSON.parse(stringifiedServers) as PreparedServers
        const serverNames = Object.keys(data)

        const servers: Servers = serverNames.reduce((sAcc, serverName) => {
            const server = data[serverName].map(({ state, apiKeyHash }) => {
              const stringifiedState = Object.assign({}, state, { txhash: new Uint8Array(state.txhash) })

              return Object.assign({ state: stringifiedState, apiKeyHash })
            })

            return Object.assign({}, sAcc, { [serverName]: server })
        }, {})

        return servers
    }
}

export default State