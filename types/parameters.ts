import * as schemaTypes from '../src/proto/schema_pb';
import * as interfaces from '../src/interfaces'

namespace Parameters {
    export type SetReference = {
        key: string
        referencedKey: string
    }
    export type SetReferenceAt = {
        key: string
        referencedKey: string
        attx: number
    }
    export type ZAdd = {
        set: string
        score: number
        key: string
    }
    export type ZAddAt = {
        set: string
        score: number
        key: string
        attx: number
    }
    export type Get = {
        key: string
    }
    export type Set = {
        key: string
        value: string
    }
    export type Login = {
        user: string
        password: string
    }
    export type CreateUser = {
        user: string
        password: string
        database: string
        permission: number
    }
    export type ChangePassword = {
        user: string
        oldpassword: string
        newpassword: string
    }
    export type Count = {
        prefix: string
    }
    export type History = {
        key: string
        offset: number
        limit: number
        desc: boolean
        sincetx: number
    }
    export type Scan = {
        seekkey?: string
        prefix?: string
        desc?: boolean
        limit?: number
        sincetx?: number
        nowait?: boolean
    }
    export type ZScan = {
        set: string,
        seekkey: string,
        seekscore: number,
        seekattx: number,
        inclusiveseek: boolean,
        limit: number,
        desc: boolean,
        minscore?: schemaTypes.Score.AsObject,
        maxscore?: schemaTypes.Score.AsObject,
        sincetx: number,
        nowait: boolean,
    }
    export type SetAll = schemaTypes.SetRequest.AsObject
    export type ExecAll = schemaTypes.ExecAllRequest.AsObject
    export type GetAll = schemaTypes.KeyListRequest.AsObject
    export type VerifiedSet = schemaTypes.KeyValue.AsObject
    export type VerifiedGet = interfaces.PartialBy<schemaTypes.KeyRequest.AsObject, 'sincetx' | 'attx'>
    export type VerifiedGetAt = Omit<schemaTypes.KeyRequest.AsObject, 'sincetx'>
    export type VerifiedGetSince = Omit<schemaTypes.KeyRequest.AsObject, 'attx'>
    export type VerifiedZAdd = ZAdd
}

export default Parameters