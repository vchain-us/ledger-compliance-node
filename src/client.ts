require('dotenv').config()

import grpc from '@grpc/grpc-js';
import empty from 'google-protobuf/google/protobuf/empty_pb';

import * as schemaTypes from './proto/schema_pb';
import services from './proto/lc_grpc_pb';
import * as util from './util';
import { proofTx, txFrom } from './tx'
import { verifyInclusion, verifyDualProof } from './verification'
import * as types from './types'
import State from './state'
import * as interfaces from './interfaces';
import { CLIENT_INIT_PREFIX, DEFAULT_DATABASE, DEFAULT_ROOTPATH } from './consts'

class ImmudbLcClient {
  public state: State;

  public client: services.LcServiceClient;

  private static instance: ImmudbLcClient;

  private _auth: any;

  private _metadata: grpc.Metadata;

  private _serverUUID: any;

  private _apiKey: any;

  private constructor({
    host = (process.env.LEDGER_COMPLIANCE_ADDRESS as string) || '127.0.0.1',
    port = (process.env.LEDGER_COMPLIANCE_PORT as string) || '3324',
    certs,
    rootPath = DEFAULT_ROOTPATH
  }: interfaces.Config) {
    // init insecure grpc auth
    this._auth = grpc.credentials.createInsecure();

    // init secure grpc auth
    if (certs !== undefined) {
      this._auth = grpc.credentials.createSsl(Buffer.from(JSON.stringify(certs)));
    }

    // initialize client from service
    this.client = new services.LcServiceClient(`${host}:${port}`, this._auth);

    // init empty grpc metadata
    this._metadata = new grpc.Metadata();

    // init state
    this.state = new State({ client: this.client })
  }

  public static async getInstance(config: interfaces.Config): Promise<ImmudbLcClient> {
    const { apiKey } = config
    try {
      if (!ImmudbLcClient.instance) {
        console.log(
          `${CLIENT_INIT_PREFIX} creating new ImmudbLcClient instance with config`,
          '\n',
          `${util.maskConfig(config)}`
        );
        ImmudbLcClient.instance = new ImmudbLcClient(config);
        console.log(`${CLIENT_INIT_PREFIX} init new instance`);
        await ImmudbLcClient.instance.initClient(apiKey);
      } else {
        console.log(`${CLIENT_INIT_PREFIX} using already available ImmudbLcClient instance`);
      }

      return new Promise((resolve) => resolve(ImmudbLcClient.instance));
    } catch (err) {
      await ImmudbLcClient.instance.shutdown();
      return new Promise((reject) => reject(err));
    }
  }

  public async initClient(apiKey: string) {
    this._apiKey = apiKey

    this._metadata.remove('lc-api-key')
    this._metadata.add('lc-api-key', this._apiKey)

    // fetch health status
    await this.health();
  }

  async shutdown() {
    // this.state.commit();
    process.exit(0);
  }

  async set({ key, value }: types.SetParameters): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.SetRequest();
      const kv = new schemaTypes.KeyValue();

      kv.setKey(util.utf8Encode(key));
      kv.setValue(util.utf8Encode(value));
      req.setKvsList([kv]);

      return new Promise((resolve, reject) =>
        this.client.set(req, this._metadata, async (err, res) => {
          if (err) {
            console.error('Set error', err);
            return reject(err);
          } else {
            const resObject = res.toObject()

            resolve(resObject);
          }
        })
      );
    } catch (err) {
      console.error('Set error', err);
    }
  }

  async get({ key }: types.GetParameters): Promise<schemaTypes.Entry.AsObject | undefined> {
    try {
      const req = new schemaTypes.KeyRequest();

      req.setKey(util.utf8Encode(key));

      return new Promise(resolve =>
        this.client.get(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Get error', err);
            throw new Error(err.message);
          } else {
            resolve({
              tx: res && res.getTx(),
              key: util.utf8Decode(res && res.getKey()),
              value: util.utf8Decode(res && res.getValue()),
            });
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async health(): Promise<schemaTypes.HealthResponse.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) => {
        const call = this.client.health(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Health error', err);
            return reject(err);
          }

          resolve({
            status: res.getStatus(),
            version: res.getVersion(),
          });
        })

        call.on('_metadata', meta => {
          this._serverUUID = meta.get('immudb-uuid')[0]
        })
      });
    } catch (err) {
      console.error(err);
    }
  }

  async scan(
    { seekkey, prefix, desc, limit, sincetx, nowait }: types.ScanParameters = {}
  ): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.ScanRequest();

      if (seekkey !== undefined) {
        req.setSeekkey(util.utf8Encode(seekkey));
      } 
      if (prefix !== undefined) {
        req.setPrefix(util.utf8Encode(prefix));
      }
      if (desc !== undefined) {
        req.setDesc(desc);
      }
      if (limit !== undefined) {
        req.setLimit(limit);
      }
      if (sincetx !== undefined) {
        req.setSincetx(sincetx);
      }
      if (nowait !== undefined) {
        req.setNowait(nowait);
      }

      return new Promise((resolve, reject) =>
        this.client.scan(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Scan error', err);
            return reject(err);
          }

          const result: Array<schemaTypes.Entry.AsObject> = [];
          const il = res && res.getEntriesList();
          for (let i = 0; il && i < il.length; i++) {
            const item = il[i];
            result.push({
              tx: item.getTx(),
              key: util.utf8Decode(item.getKey()),
              value: util.utf8Decode(item.getValue()),
            });
          }

          resolve({
            entriesList: result,
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async history(
    { key, offset, limit, desc, sincetx }: types.HistoryParameters
  ): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.HistoryRequest();

      req.setKey(util.utf8Encode(key));
      req.setOffset(offset);
      req.setLimit(limit);
      req.setDesc(desc);
      req.setSincetx(sincetx);

      return new Promise((resolve, reject) =>
        this.client.history(req, this._metadata, (err, res) => {
          if (err) {
            console.error('History error', err);
            return reject(err);
          }

          const entriesList = res.getEntriesList();
          const result = entriesList.reduce(
            (entries, entry) => entries.concat({
              tx: entry.getTx(),
              key: util.utf8Decode(entry.getKey()),
              value: util.utf8Decode(entry.getValue()),
            }),
            [] as Array<schemaTypes.Entry.AsObject>
          )

          resolve({
            entriesList: result
          })
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async zScan(
    { set, seekkey, seekscore, seekattx, inclusiveseek, limit, desc, sincetx, nowait }: types.ZScanParameters
  ): Promise<schemaTypes.ZEntries.AsObject | undefined> {
    try {
      const req = new schemaTypes.ZScanRequest();

      req.setSet(util.utf8Encode(set));
      req.setSeekkey(util.utf8Encode(seekkey));
      req.setSeekscore(seekscore);
      req.setSeekattx(seekattx);
      req.setInclusiveseek(inclusiveseek);
      req.setLimit(limit);
      req.setDesc(desc);
      req.setSincetx(sincetx);
      req.setNowait(nowait);

      return new Promise((resolve, reject) =>
        this.client.zScan(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zScan error', err);
            return reject(err);
          }

          const entriesList = res.getEntriesList();
          const result = entriesList.reduce(
            (entries, entry) => entries.concat({
              set: util.utf8Decode(entry.getSet()),
              key: util.utf8Decode(entry.getKey()),
              score: entry.getScore(),
              attx: entry.getAttx()
            }),
            [] as Array<schemaTypes.ZEntry.AsObject>
          )

          resolve({
            entriesList: result
          })
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async currentState(): Promise<schemaTypes.ImmutableState.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) => this.client.currentState(req, this._metadata, (err, res) => {
        if (err) {
          reject(err);
        } else {
          const signature = res.getSignature();

          const state: schemaTypes.ImmutableState.AsObject = {
            db: res.getDb(),
            txid: res.getTxid(),
            txhash: res.getTxhash_asU8(),
            signature: signature?.toObject()
          }

          this.state.set({ apiKey: this._apiKey, serverName: this._serverUUID }, state);

          resolve({
            db: DEFAULT_DATABASE,
            txid: res.getTxid(),
            txhash: res.getTxhash(),
            signature: {
              signature: util.utf8Encode(signature && signature.getSignature()),
              publickey: util.utf8Encode(signature && signature.getPublickey())
            },
          });
        }
      })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async zAdd(
    params: types.ZAddParameters
  ): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return this.zAddAt(reqParams)
  }

  async zAddAt ({ set, score = 0, key, attx = 0 }: types.ZAddAtParameters): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.ZAddRequest();

      req.setSet(util.utf8Encode(set));
      req.setScore(score);
      req.setKey(util.utf8Encode(key));
      req.setAttx(attx)
      req.setBoundref(attx > 0)

      return new Promise((resolve, reject) =>
        this.client.zAdd(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zAdd error', err);
            return reject(err);
          }

          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedZAdd(params: types.ZAddParameters): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return await this.verifiedZAddAt(reqParams)
  }

  async verifiedZAddAt({ set, score, key, attx }: types.ZAddAtParameters): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ serverName: this._serverUUID, apiKey: this._apiKey, metadata: this._metadata })
      const req = new schemaTypes.VerifiableZAddRequest()
      const uintSet = util.utf8Encode(set)
      const uintKey = util.utf8Encode(key)
  
      const zar = new schemaTypes.ZAddRequest()
  
      zar.setSet(uintSet)
      zar.setScore(score)
      zar.setKey(uintKey)
      zar.setAttx(attx)
      zar.setBoundref(attx > 0)
  
      req.setZaddrequest(zar)
      req.setProvesincetx(state.getTxid())
  
      return new Promise((resolve, reject) => this.client.verifiableZAdd(req, this._metadata, (err, res) => {
        if (err) {
          console.error('verifiedZAddAt error', err);
  
          reject(err)
        } else {
          const resTx = res.getTx()
  
          if (resTx === undefined) {
            console.error('Error getting verifiedZAddAt tx')
  
            reject()
          } else {
            const txMetadata = resTx.getMetadata()
  
            if (txMetadata === undefined) {
              console.error('Error getting verifiedZAddAt txMetadata')
    
              reject()
            } else {
              const nEntries = txMetadata.getNentries()
  
              if (nEntries !== 1) {
                console.error('nEntries verification failed for verifiedZAddAt')
      
                reject()
              }
  
              const tx = txFrom(resTx)
              const eKv = util.encodeZAdd(uintSet, score, uintKey, attx)
              const inclusionProof = proofTx(tx, eKv.getKey_asU8())
  
              if (inclusionProof === undefined) {
                console.error('Error getting inclusionProof for verifiedZAddAt')
              
                reject()
              } else {
                let verifies = verifyInclusion(inclusionProof, util.digestKeyValue(eKv), tx.htree.root)
  
                if (verifies === false) {
                  console.error('Inclusion verification for verifiedZAddAt failed')
                 
                  reject()
                }
  
                const dualProof = res.getDualproof()
  
                if (dualProof === undefined) {
                  console.error('Error getting dualProof for verifiedZAddAt')
                 
                  reject()
                } else {
                  const tTxMetadata = dualProof.getTargettxmetadata()
  
                  if (tTxMetadata === undefined) {
                    console.error('Error getting tx metadata from dualProof in verifiedZAddAt')
                 
                    reject()
                  } else {
                    if (!util.equalArray(tx.htree.root, tTxMetadata.getEh_asU8())) {
                      console.error('verifiedZAddAt error')
                    }
  
                    const txid = state.getTxid()
                    const txhash = state.getTxhash_asU8()
                    let sourceId
                    let sourceAlh
  
                    if (txid === 0) {
                      sourceId = tx.id
                      sourceAlh = tx.alh
                    } else {
                      sourceId = txid
                      sourceAlh = txhash
                    }
  
                    const targetId = tx.id
                    const targetAlh = util.getAlh(tTxMetadata)
  
                    verifies = verifyDualProof(dualProof, sourceId, targetId, sourceAlh, targetAlh)
  
                    if (verifies === false) {
                      console.error('Dual verification for verifiedZAddAt failed')
                     
                      reject()
                    }
  
                    this.state.set(
                      { serverName: this._serverUUID, apiKey: this._apiKey },
                      { txid: targetId, txhash: targetAlh, signature: res.getSignature()?.toObject(), db: DEFAULT_DATABASE }
                    )
  
                    resolve(tTxMetadata.toObject())
                  }
                }
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async setAll({ kvsList }: schemaTypes.SetRequest.AsObject): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.SetRequest();
      const kvls = kvsList.map(({ key, value }) => {
        const kv = new schemaTypes.KeyValue();

        kv.setKey(util.utf8Encode(key))
        kv.setValue(util.utf8Encode(value))

        return kv
      })

      req.setKvsList(kvls)

      return new Promise((resolve, reject) => this.client.set(req, this._metadata, (err, res) => {
        if (err) {
          console.error('setAll error', err)

          reject(err)
        } else {
          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }
  
  async execAll({ operationsList }: schemaTypes.ExecAllRequest.AsObject): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.ExecAllRequest();
      const opl = operationsList.map(({ kv, zadd, ref }) => {
        const op = new schemaTypes.Op();
        const keyValue = new schemaTypes.KeyValue()
        const zAddReq = new schemaTypes.ZAddRequest();
        const refReq = new schemaTypes.ReferenceRequest();

        if (kv !== undefined && kv !== null) {
          const { key, value } = kv

          keyValue.setKey(key)
          keyValue.setValue(value)
        }

        if (zadd !== undefined && zadd !== null) {
          const { set, score, key, attx, boundref } = zadd

          zAddReq.setSet(set)
          zAddReq.setScore(score)
          zAddReq.setKey(key)
          zAddReq.setAttx(attx)
          zAddReq.setBoundref(boundref)
        }

        if (ref !== undefined && ref !== null) {
          const { key, referencedkey, attx, boundref } = ref

          refReq.setKey(key)
          refReq.setReferencedkey(referencedkey)
          refReq.setAttx(attx)
          refReq.setBoundref(boundref)
        }

        op.setKv(keyValue);
        op.setZadd(zAddReq)
        op.setRef(refReq)

        return op
      })

      req.setOperationsList(opl)

      return new Promise((resolve, reject) => this.client.execAll(req, this._metadata, (err, res) => {
        if (err) {
          console.error('execeAll error', err)

          reject(err)
        } else {
          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async getAll ({ keysList, sincetx }: schemaTypes.KeyListRequest.AsObject): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.KeyListRequest();

      const encodedKeys = keysList.map(util.utf8Encode)

      req.setKeysList(encodedKeys);
      req.setSincetx(sincetx);

      return new Promise((resolve, reject) => this.client.getAll(req, this._metadata, (err, res) => {
        if (err) {
          console.error('Get all error', err);
          reject(err);
        }

        const entriesList = res.getEntriesList();
        const result = entriesList.reduce(
          (entries, entry) => entries.concat({
            tx: entry.getTx(),
            key: util.utf8Decode(entry.getKey()),
            value: util.utf8Decode(entry.getValue()),
          }),
          [] as Array<schemaTypes.Entry.AsObject>
        )

        resolve({
          entriesList: result
        })
      }))
    } catch(err) {
      console.error(err);
    }
  }

  async verifiedSet ({ key, value }: schemaTypes.KeyValue.AsObject): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ apiKey: this._apiKey, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new schemaTypes.VerifiableSetRequest();
      const kv = new schemaTypes.KeyValue();
      const setRequest = new schemaTypes.SetRequest();
      const uint8Key = util.utf8Encode(key)
      const uint8Value = util.utf8Encode(value)

      kv.setKey(uint8Key)
      kv.setValue(uint8Value)

      setRequest.setKvsList([kv])

      req.setProvesincetx(txid)
      req.setSetrequest(setRequest)

      return new Promise((resolve, reject)=> this.client.verifiableSet(req, this._metadata, async (err, res) => {
        if (err) {
          console.error('verifiedSet error', err)

          reject(err)
        } else {
          const verifiableTx = res.getTx()

          if (verifiableTx === undefined) {
            console.error('Error getting verifiableTx from verifiedSet response')

            reject()
          } else {
            const tx = txFrom(verifiableTx)
            const inclusionProof = proofTx(tx, util.prefixKey(uint8Key))

            if (inclusionProof === undefined) {
              console.error('Error getting inclusionProof for verifiedSet')

              reject()
            } else {
              const eKv = util.encodeKeyValue(uint8Key, uint8Value)
              let verifies = verifyInclusion(inclusionProof, util.digestKeyValue(eKv), tx.htree.root)
  
              if (!verifies) {
                console.error('verifiedSet inclusion verification failed', err)
  
                reject(err)
              }
  
              const dualProof = res.getDualproof()
  
              if (!dualProof) {
  
              } else {
                const tTxMetadata = dualProof.getTargettxmetadata()
                const sTxMetadata = dualProof.getSourcetxmetadata()
  
                if (!tTxMetadata || !sTxMetadata) {
  
                } else {
                  if (!util.equalArray(tx.htree.root, tTxMetadata.getEh_asU8())) {
                    console.error('verifiedSet error')
                  }
  
                  let sourceId: number
                  let sourceAlh: Uint8Array
  
                  if (txid === 0) {
                    sourceId = tx.id
                    sourceAlh = util.getAlh(sTxMetadata)
                  } else {
                    sourceId = txid
                    sourceAlh = txhash
                  }
  
                  const targetId = tx.id
                  const targetAlh = util.getAlh(tTxMetadata)
  
                  verifies = verifyDualProof(dualProof, sourceId, targetId, sourceAlh, targetAlh)
  
                  if (!verifies) {
                    console.error('verifiedSet dual verification failed', err)
      
                    reject(err)
                  }
  
                  this.state.set({ serverName: this._serverUUID, apiKey: this._apiKey }, {
                    db: DEFAULT_DATABASE,
                    txid: targetId,
                    txhash: targetAlh,
                    signature: res.getSignature()?.toObject()
                  })
  
                  resolve(tTxMetadata.toObject())
                }
              }
            }
          }
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async verifiedGet({ key, attx, sincetx }: interfaces.PartialBy<schemaTypes.KeyRequest.AsObject, 'sincetx' | 'attx'>): Promise<schemaTypes.Entry.AsObject | undefined> {
    try {
      const state = await this.state.get({ apiKey: this._apiKey, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new schemaTypes.VerifiableGetRequest();
      const kr = new schemaTypes.KeyRequest();
      const uint8Key = util.utf8Encode(key)

      kr.setKey(uint8Key)

      if (attx !== undefined) {
        kr.setAttx(attx)
      }
      if (sincetx !== undefined) {
        kr.setSincetx(sincetx)
      }

      req.setKeyrequest(kr);
      req.setProvesincetx(txid);

      return new Promise((resolve, reject) => this.client.verifiableGet(req, this._metadata, async (err, res) => {
        if (err) {
          console.error(err);

          reject(err)
        } else {
          const inclusionproof = res.getInclusionproof()
          const verifiabletx = res.getVerifiabletx()
          const entry = res.getEntry()

          if (!inclusionproof || !verifiabletx || !entry) {
            console.error('Server verifiedGet error');
  
            reject()
          } else {
            const referencedby = entry.getReferencedby()
            let vTx: number
            let kv = new schemaTypes.KeyValue()

            if (referencedby === undefined) {
              vTx = entry.getTx()

              kv.setKey(util.prefixKey(uint8Key))
              kv.setValue(util.prefixValue(entry.getValue_asU8()))
            } else {
              const encRefKey = referencedby.getKey_asU8()
              const atTx = referencedby.getAttx()
              const entryKey = entry.getKey_asU8()
    
              vTx = referencedby.getTx()

              kv.setKey(util.prefixKey(encRefKey))
              kv.setValue(util.encodeReferenceValue(entryKey, atTx))
            }

            const dualproof = verifiabletx.getDualproof()

            if (dualproof === undefined) {
              console.error('Server verifiedGet error');
    
              reject()
            } else {
              const targettxmetadata = dualproof.getTargettxmetadata()
              const sourcetxmetadata = dualproof.getSourcetxmetadata()

              if (targettxmetadata === undefined || sourcetxmetadata === undefined) {
                console.error('Server verifiedGet error');
      
                reject()
              } else {
                let eh
                let sourceId
                let sourceAlh
                let targetId
                let targetAlh
    
                if (txid <= vTx) {
                  const tPrevalh = util.getAlh(targettxmetadata)

                  eh = targettxmetadata.getEh_asU8()
                  sourceId = txid
                  sourceAlh = txhash
                  targetId = vTx
                  targetAlh = tPrevalh
                } else {
                  const sPrevalh = util.getAlh(sourcetxmetadata)
                  
                  eh = sourcetxmetadata.getEh_asU8()
                  sourceId = vTx
                  sourceAlh = sPrevalh
                  targetId = txid
                  targetAlh = txhash
                }
    
                let verifies = verifyInclusion(inclusionproof, util.digestKeyValue(kv), eh)
    
                if (!verifies) {
                  console.error('verifiedGet inclusion verification failed');
    
                  reject()
                }
    
                verifies = verifyDualProof(
                  dualproof,
                  sourceId,
                  targetId,
                  sourceAlh,
                  targetAlh
                )
    
                if (!verifies) {
                  console.error('verifiedGet dual verification failed');
    
                  reject()
                }

                this.state.set(
                  { serverName: this._serverUUID, apiKey: this._apiKey },
                  { txid: targetId, txhash: targetAlh, signature: verifiabletx.getSignature()?.toObject(), db: DEFAULT_DATABASE }
                )

                const referencedBy = entry.getReferencedby()

                resolve({
                  tx: vTx,
                  key: util.utf8Decode(entry.getKey_asU8()),
                  value: util.utf8Decode((entry.getValue_asU8())),
                  referencedby: referencedBy?.toObject()
                })
              }
            }
          }
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async verifiedGetAt({ key, attx }: Omit<schemaTypes.KeyRequest.AsObject, 'sincetx'>) {
    return await this.verifiedGet({ key, attx })
  }
  async verifiedGetSince({ key, sincetx }: Omit<schemaTypes.KeyRequest.AsObject, 'attx'>) {
    return await this.verifiedGet({ key, sincetx })
  }
}

export default ImmudbLcClient;
