import * as schemaTypes from './proto/schema_pb';
import * as interfaces from './interfaces'

export type SetReferenceParameters = {
    key: string
    referencedKey: string
}
export type SetReferenceAtParameters = {
    key: string
    referencedKey: string
    attx: number
}
export type ZAddParameters = {
    set: string
    score: number
    key: string
}
export type ZAddAtParameters = {
    set: string
    score: number
    key: string
    attx: number
}
export type GetParameters = {
    key: string
}
export type SetParameters = {
    key: string
    value: string
}
export type LoginParameters = {
    user: string
    password: string
}
export type CreateUserParameters = {
    user: string
    password: string
    database: string
    permission: number
}
export type ChangePasswordParameters = {
    user: string
    oldpassword: string
    newpassword: string
}
export type CountParameters = {
    prefix: string
}
export type HistoryParameters = {
    key: string
    offset: number
    limit: number
    desc: boolean
    sincetx: number
}
export type ScanParameters = {
    seekkey?: string
    prefix?: string
    desc?: boolean
    limit?: number
    sincetx?: number
    nowait?: boolean
}
export type ZScanParameters = {
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
export type SetAllParameters = schemaTypes.SetRequest.AsObject
export type ExecAllParameters = schemaTypes.ExecAllRequest.AsObject
export type GetAllParameters = schemaTypes.KeyListRequest.AsObject
export type VerifiedSetParameters = schemaTypes.KeyValue.AsObject
export type VerifiedGetParameters = interfaces.PartialBy<schemaTypes.KeyRequest.AsObject, 'sincetx' | 'attx'>
export type VerifiedGetAtParameters = Omit<schemaTypes.KeyRequest.AsObject, 'sincetx'>
export type VerifiedGetSinceParameters = Omit<schemaTypes.KeyRequest.AsObject, 'attx'>
export type VerifiedZAddParameters = ZAddParameters
