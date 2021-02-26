// package: lc.schema
// file: lc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TamperReport extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): TamperReport;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): TamperReport;

    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): TamperReport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TamperReport.AsObject;
    static toObject(includeInstance: boolean, msg: TamperReport): TamperReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TamperReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TamperReport;
    static deserializeBinaryFromReader(message: TamperReport, reader: jspb.BinaryReader): TamperReport;
}

export namespace TamperReport {
    export type AsObject = {
        index: number,
        key: Uint8Array | string,
        root: Uint8Array | string,
    }
}

export class ReportOptions extends jspb.Message { 

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): TamperReport | undefined;
    setPayload(value?: TamperReport): ReportOptions;


    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): schema_pb.Signature | undefined;
    setSignature(value?: schema_pb.Signature): ReportOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReportOptions): ReportOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportOptions;
    static deserializeBinaryFromReader(message: ReportOptions, reader: jspb.BinaryReader): ReportOptions;
}

export namespace ReportOptions {
    export type AsObject = {
        payload?: TamperReport.AsObject,
        signature?: schema_pb.Signature.AsObject,
    }
}

export class DataValue extends jspb.Message { 
    getName(): string;
    setName(value: string): DataValue;

    getType(): string;
    setType(value: string): DataValue;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): DataValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataValue.AsObject;
    static toObject(includeInstance: boolean, msg: DataValue): DataValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataValue;
    static deserializeBinaryFromReader(message: DataValue, reader: jspb.BinaryReader): DataValue;
}

export namespace DataValue {
    export type AsObject = {
        name: string,
        type: string,
        value: Uint8Array | string,
    }
}

export class Data extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Data;

    getMsgid(): number;
    setMsgid(value: number): Data;

    getDbname(): string;
    setDbname(value: string): Data;

    getTablename(): string;
    setTablename(value: string): Data;

    getOperation(): string;
    setOperation(value: string): Data;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Data;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        key: string,
        msgid: number,
        dbname: string,
        tablename: string,
        operation: string,
        data: Uint8Array | string,
    }
}

export class Response extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): Response;

    getMsg(): string;
    setMsg(value: string): Response;

    getMsgid(): number;
    setMsgid(value: number): Response;


    hasVerifiabletx(): boolean;
    clearVerifiabletx(): void;
    getVerifiabletx(): schema_pb.VerifiableTx | undefined;
    setVerifiabletx(value?: schema_pb.VerifiableTx): Response;


    hasState(): boolean;
    clearState(): void;
    getState(): schema_pb.ImmutableState | undefined;
    setState(value?: schema_pb.ImmutableState): Response;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        status: number,
        msg: string,
        msgid: number,
        verifiabletx?: schema_pb.VerifiableTx.AsObject,
        state?: schema_pb.ImmutableState.AsObject,
    }
}

export class VerifiableItemExt extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): schema_pb.VerifiableEntry | undefined;
    setItem(value?: schema_pb.VerifiableEntry): VerifiableItemExt;


    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): VerifiableItemExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableItemExt.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableItemExt): VerifiableItemExt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableItemExt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableItemExt;
    static deserializeBinaryFromReader(message: VerifiableItemExt, reader: jspb.BinaryReader): VerifiableItemExt;
}

export namespace VerifiableItemExt {
    export type AsObject = {
        item?: schema_pb.VerifiableEntry.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ItemExt extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): schema_pb.Entry | undefined;
    setItem(value?: schema_pb.Entry): ItemExt;


    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ItemExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemExt.AsObject;
    static toObject(includeInstance: boolean, msg: ItemExt): ItemExt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemExt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemExt;
    static deserializeBinaryFromReader(message: ItemExt, reader: jspb.BinaryReader): ItemExt;
}

export namespace ItemExt {
    export type AsObject = {
        item?: schema_pb.Entry.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ItemExtList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ItemExt>;
    setItemsList(value: Array<ItemExt>): ItemExtList;
    addItems(value?: ItemExt, index?: number): ItemExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemExtList.AsObject;
    static toObject(includeInstance: boolean, msg: ItemExtList): ItemExtList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemExtList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemExtList;
    static deserializeBinaryFromReader(message: ItemExtList, reader: jspb.BinaryReader): ItemExtList;
}

export namespace ItemExtList {
    export type AsObject = {
        itemsList: Array<ItemExt.AsObject>,
    }
}

export class ZItemExt extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): schema_pb.ZEntry | undefined;
    setItem(value?: schema_pb.ZEntry): ZItemExt;


    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ZItemExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZItemExt.AsObject;
    static toObject(includeInstance: boolean, msg: ZItemExt): ZItemExt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZItemExt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZItemExt;
    static deserializeBinaryFromReader(message: ZItemExt, reader: jspb.BinaryReader): ZItemExt;
}

export namespace ZItemExt {
    export type AsObject = {
        item?: schema_pb.ZEntry.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ZItemExtList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ZItemExt>;
    setItemsList(value: Array<ZItemExt>): ZItemExtList;
    addItems(value?: ZItemExt, index?: number): ZItemExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZItemExtList.AsObject;
    static toObject(includeInstance: boolean, msg: ZItemExtList): ZItemExtList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZItemExtList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZItemExtList;
    static deserializeBinaryFromReader(message: ZItemExtList, reader: jspb.BinaryReader): ZItemExtList;
}

export namespace ZItemExtList {
    export type AsObject = {
        itemsList: Array<ZItemExt.AsObject>,
    }
}
