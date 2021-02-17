// package: lc.schema
// file: lc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

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


    hasProof(): boolean;
    clearProof(): void;
    getProof(): schema_pb.Proof | undefined;
    setProof(value?: schema_pb.Proof): Response;


    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): schema_pb.Root | undefined;
    setRoot(value?: schema_pb.Root): Response;


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
        proof?: schema_pb.Proof.AsObject,
        root?: schema_pb.Root.AsObject,
    }
}
